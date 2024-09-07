import { Injectable } from '@nestjs/common';
import { hash, compare } from 'bcrypt';
import { randomUUID } from 'crypto';
import { Months } from './types/types';

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
    const date = new Date();
    return (
      date.getDate().toString() +
      date.getMonth().toString() +
      date.getFullYear().toString().substring(2) +
      randomUUID().substring(25, 30)
    );
  }

  formatDate(): string {
    const actualDate = new Date();
    const month = actualDate.getMonth();
    const day = actualDate.getDate();
    const year = actualDate.getFullYear();

    return `${Months[month]} ${day}, ${year}`;
  }

  getMinutesHours(lastDate: Date): string {
    const actualDate = new Date();

    const diffMs = actualDate.getTime() - lastDate.getTime();

    const diffMinutes = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMinutes / 60);

    if (diffMinutes < 60) {
      if (diffMinutes === 1) {
        return `Hace 1 minuto`;
      } else {
        return `Hace ${diffMinutes} minutos`;
      }
    } else {
      if (diffHours === 1) {
        return `Hace 1 hora`;
      } else {
        if (diffHours > 23) {
          const month = lastDate.getMonth();
          const day = lastDate.getDate();
          const year = lastDate.getFullYear();

          return `${Months[month]} ${day}, ${year}`;
        }
        return `Hace ${diffHours} horas`;
      }
    }
  }
}
