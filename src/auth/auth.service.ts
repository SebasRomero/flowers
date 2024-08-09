import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';
import { UtilitiesService } from 'src/utilities/utilities.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginResponseDto } from './dto/login-response.dto';
import { SignUpResponseDto } from './dto/signup-response.dto';

@Injectable()
export class AuthService {
  constructor(
    private utilitiesService: UtilitiesService,
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async signUp(createUser: CreateUserDto): Promise<SignUpResponseDto> {
    const { username, password, role } = createUser;
    const user = await this.userModel.findOne({ username: username });

    if (user)
      throw new HttpException('user already exist', HttpStatus.BAD_REQUEST);

    const hashedPassword = await this.utilitiesService.hashPassword(password);

    const createdUser = await this.userModel.create({
      username: username,
      password: hashedPassword,
      roles: role,
    });

    return this.getAccessToken({
      username: createdUser.username,
      sub: createdUser._id,
    });
  }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userModel.findOne({ username }).lean();

    if (!user) return null;

    const comparePasswords = await this.utilitiesService.comparePasswords(
      password,
      user.password,
    );
    if (!comparePasswords) return null;

    return {
      _id: user._id,
      username: user.username,
      roles: user.roles,
    };
  }

  login(user: any): LoginResponseDto {
    const payload = {
      username: user.username,
      sub: user._id,
      roles: user.roles,
    };
    return this.getAccessToken(payload);
  }

  getAccessToken(payload) {
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
