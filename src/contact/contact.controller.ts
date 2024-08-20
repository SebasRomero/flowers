import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ContactService } from './contact.service';
import { Public } from 'src/auth/decorators/public.decorator';
import { SubmitContactDto } from './dto/submit-contact.dto';
import { SubmitContactResponse } from './responses/submit-contact.response';

@Controller('contact')
export class ContactController {
  constructor(private contactService: ContactService) {}

  @Post()
  @Public()
  @HttpCode(HttpStatus.CREATED)
  async submitContactForm(
    @Body() createContactDto: SubmitContactDto,
  ): Promise<SubmitContactResponse> {
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Message',
      data: await this.contactService.submitContactForm(createContactDto),
    };
  }
}
