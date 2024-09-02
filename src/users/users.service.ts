import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model, Types } from 'mongoose';
import { IUser } from './types/user.interface';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async getCurrentUser(userId: string): Promise<IUser> | null {
    const user: IUser = await this.userModel.findOne({
      _id: new Types.ObjectId(userId),
    });
    if (!user) return null;
    return { name: user.name, roles: user.roles, username: user.username };
  }

  async findOneUser(username: string): Promise<IUser> | null {
    return await this.userModel.findOne({ username });
  }
}
