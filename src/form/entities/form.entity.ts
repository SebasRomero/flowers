import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { TourNames } from '../types/submit-form.types';

@Entity()
export class Form {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column()
  numberOfPersons: number;

  @Column('enum', { enum: TourNames })
  tourName: TourNames;

  @Column({ type: 'datetime' })
  dateStartingTour: Date;
}
