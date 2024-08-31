import { Module } from '@nestjs/common';
import { TourService } from './tour.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Tour, TourSchema } from './schema/tour.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tour.name, schema: TourSchema }]),
  ],
  providers: [TourService],
})
export class TourModule {}
