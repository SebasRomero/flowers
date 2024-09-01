import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty } from 'class-validator';

export class ChangeArchivedStatusDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsBoolean()
  isArchived: boolean;
}
