import { Module } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Form } from 'src/form/schemas/form.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Form.name, schema: Form }])],
  providers: [DashboardService],
  controllers: [DashboardController],
})
export class DashboardModule {}
