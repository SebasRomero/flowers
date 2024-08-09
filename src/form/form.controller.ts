import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { FormService } from './form.service';
import { SubmitFormDto } from './dto/submit-form.dto';
import { SubmitFormResponse } from './responses/submit-form.response';
import { Public } from 'src/auth/decorators/public.decorator';

@Controller('form')
export class FormController {
  constructor(private formService: FormService) {}

  @Post()
  @Public()
  @HttpCode(HttpStatus.CREATED)
  async submitForm(
    @Body() createFormDto: SubmitFormDto,
  ): Promise<SubmitFormResponse> {
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Message',
      data: await this.formService.submitForm(createFormDto),
    };
  }
}
