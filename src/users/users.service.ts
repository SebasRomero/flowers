import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { IUser } from './types/user.interface';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findUser(username: string): Promise<IUser> | null {
    const user: IUser = await this.userModel.findOne({ username: username });
    if (!user) return null;
    return null;
  }
}
