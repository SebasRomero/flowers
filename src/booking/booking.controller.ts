import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { BookingService } from './booking.service';
import { SubmitBookingDto } from './dto/submit-booking.dto';
import { SubmitBookingResponse } from './responses/submit-booking.response';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('booking')
export class BookingController {
  constructor(private formService: BookingService) {}

  @Post()
  @Public()
  @HttpCode(HttpStatus.CREATED)
  async submitForm(
    @Body() createFormDto: SubmitBookingDto,
  ): Promise<SubmitBookingResponse> {
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Message',
      data: await this.formService.submitForm(createFormDto),
    };
  }
}
