import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Auth, AuthDocument } from './auth.schema';
import { Model } from 'mongoose'
import { promises } from 'dns';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(Auth.name) private authModel: Model<AuthDocument>
    ){}

    async createUser(data: Partial<Auth>): Promise<Auth>{
        const newUser = new this.authModel(data);
        return newUser.save();
    }

     async login(email: string, password: string) {
    const user = await this.authModel.findOne({ email }).exec();

    if (!user) {
      throw new UnauthorizedException('Invalid email or password');
    }

    if (user.password !== password) {
      throw new UnauthorizedException('Invalid email or password');
    }

    return { message: 'User Login Successfully', user };
  }
}

