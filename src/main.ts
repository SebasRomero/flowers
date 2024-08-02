import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  const config = app.get(ConfigService);
  const port = config.get('PORT');

  const configSwagger = new DocumentBuilder()
    .setTitle('Tours API')
    .setDescription('This is the tours api')
    .setVersion('1.0')
    .addTag('tours')
    .build();

  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
  console.log('App running in port: ', port);
}
bootstrap();
