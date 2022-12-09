import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true
  });
  app.enableCors({
    allowedHeaders: "Content-Type, Accept",
    origin : '*',
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  });
  await app.listen(3000);
}
bootstrap();
