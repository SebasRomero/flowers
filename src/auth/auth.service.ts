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
    const { username, name, password, role } = createUser;
    const user = await this.userModel.findOne({ username: username });

    if (user)
      throw new HttpException('user already exist', HttpStatus.BAD_REQUEST);

    const hashedPassword = await this.utilitiesService.hashPassword(password);

    const createdUser = await this.userModel.create({
      username: username,
      name: name,
      password: hashedPassword,
      roles: role,
    });

    return this.login(createdUser);
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
      name: user.name,
      roles: user.roles,
    };
  }

  login(user: any): LoginResponseDto {
    const payload = {
      username: user.username,
      name: user.name,
      sub: user._id,
      roles: user.roles,
    };
    return {
      user: {
        name: user.name,
        username: user.username,
        roles: user.roles,
      },
      access_token: this.getAccessToken(payload).access_token,
    };
  }

  getAccessToken(payload) {
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
