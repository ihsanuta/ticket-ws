import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true
  });
  app.enableCors({
    allowedHeaders: ['content-type'],
    origin : 'http://203.194.114.12:4200',
    credentials: true,
  });
  await app.listen(3000);
}
bootstrap();
