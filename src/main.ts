import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { prefix } from './constants/constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(prefix)
  await app.listen(3000);
}
bootstrap();
