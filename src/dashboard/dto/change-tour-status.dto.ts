import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { BookingStatus } from 'src/booking/types/booking-status';

export class ChangeTourStatusDto {
  @ApiProperty({ description: 'The status to be changed', enum: BookingStatus })
  @IsNotEmpty()
  status: BookingStatus;

  @ApiProperty({
    description: 'The description',
    type: String,
  })
  @IsNotEmpty()
  description: string;
}
