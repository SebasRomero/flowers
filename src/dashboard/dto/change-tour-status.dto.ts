import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength } from 'class-validator';
import { BookingStatus } from 'src/booking/types/booking-status';

export class ChangeTourStatusDto {
  @ApiProperty({ description: 'The status to be changed', enum: BookingStatus })
  @IsNotEmpty()
  status: BookingStatus;

  @ApiProperty({
    description: 'The observations',
    type: String,
  })
  @MaxLength(200)
  observations: string;
}
