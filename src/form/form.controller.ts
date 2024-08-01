import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { FormService } from './form.service';
import { SubmitFormDto } from './dto/submit-form.dto';
import { SubmitFormResponse } from './responses/submit-form.response';

@Controller('form')
export class FormController {
  constructor(private formService: FormService) {}

  @Post()
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

  @Get()
  getForms() {
    return this.formService.findAll();
  }
}
