import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';
import { UtilitiesService } from 'src/utilities/utilities.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginResponseDto } from './dto/login-response.dto';
import { SignUpResponseDto } from './dto/signup-response.dto';
import { Role, RoleAdminAGent } from './enums/role.enum';
import { IUser } from 'src/users/types/user.interface';
import { GetUsersDto } from './dto/get-user-response.dto';

@Injectable()
export class AuthService {
  constructor(
    private utilitiesService: UtilitiesService,
    @InjectModel(User.name) private readonly userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async createUser(createUser: CreateUserDto): Promise<SignUpResponseDto> {
    const { username, name, password } = createUser;
    if (!username && !name && !password)
      throw new HttpException(
        'Error creando al usuario',
        HttpStatus.BAD_REQUEST,
      );

    createUser.role.map((element) => {
      if (!Object.keys(RoleAdminAGent).includes(element))
        throw new HttpException(
          'El nombre del role debe ser correcto',
          HttpStatus.BAD_REQUEST,
        );
    });
    const user = await this.userModel.findOne({ username: username });

    if (user)
      throw new HttpException('user already exist', HttpStatus.BAD_REQUEST);

    const hashedPassword = await this.utilitiesService.hashPassword(password);

    /*     role.map((element) => {
      if (!(element in Role))
        throw new HttpException('Error en los roles', HttpStatus.BAD_REQUEST);
    }); */

    const roles = [];

    createUser.role.map((element) => {
      roles.push(Role[element]);
    });

    const createdUser = await this.userModel.create({
      username: username,
      name: name,
      password: hashedPassword,
      roles: roles,
    });

    return this.login(createdUser);
  }

  async deleteUser(userId: string, req: any): Promise<IUser> {
    const ctxUserAdmin = req.user.roles.some((element) =>
      element.includes(Role.ADMIN),
    );
    const ctxUserOwner = req.user.roles.some((element) =>
      element.includes(Role.OWNER),
    );
    const user = await this.userModel.findById(userId);
    if (!user)
      throw new HttpException(
        'No se encontró el usuario',
        HttpStatus.BAD_REQUEST,
      );
    const isAdmin = user.roles.some((element) => element.includes(Role.ADMIN));
    const isOwner = user.roles.some((element) => element.includes(Role.OWNER));
    if (isAdmin && ctxUserAdmin && !ctxUserOwner)
      throw new HttpException(
        'No se pudo eliminar el usuario admin',
        HttpStatus.BAD_REQUEST,
      );
    else if (!isOwner) {
      const response = await this.userModel.findByIdAndDelete(userId).lean();

      if (response)
        return {
          name: response.name,
          username: response.username,
          roles: response.roles,
        };
    }

    throw new HttpException(
      'No se pudo eliminar el usuario',
      HttpStatus.BAD_REQUEST,
    );
  }

  async getUsers(): Promise<GetUsersDto[]> {
    const response: GetUsersDto[] = await this.userModel.find(
      {
        roles: { $nin: ['owner'] },
      },
      { password: false, roles: false },
    );
    return response;
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
