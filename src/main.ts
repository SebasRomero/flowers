import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());

  const config = app.get(ConfigService);
  const port = config.get('PORT');
  const BASE_URL = 'https://unpkg.com/swagger-ui-dist@^5';

  const configSwagger = new DocumentBuilder()
    .setTitle('Tours API')
    .setDescription('This is the tours api')
    .setVersion('1.0')
    .addTag('tours')
    .build();

  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup('api', app, document, {
    customCssUrl: `${BASE_URL}/swagger-ui.css`,
    customJs: [
      `${BASE_URL}/swagger-ui-bundle.js`,
      `${BASE_URL}/swagger-ui-standalone-preset.js`,
    ],
  });

  await app.listen(port);
  console.log('App running in port: ', port);
}
bootstrap();
