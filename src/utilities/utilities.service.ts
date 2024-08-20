import { Injectable } from '@nestjs/common';
import { hash, compare } from 'bcrypt';
import { randomUUID } from 'crypto';

@Injectable()
export class UtilitiesService {
  capitalizeFirstLetter(text: string) {
    return text
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  async hashPassword(password: string): Promise<string> {
    return await hash(password, 10);
  }

  async comparePasswords(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return await compare(password, hashedPassword);
  }

  generateOrderNumber(): string {
    const date = new Date().valueOf().toString();
    return (
      date.substring(0, 5) + randomUUID().substring(24) + date.substring(5, 9)
    );
  }
}
