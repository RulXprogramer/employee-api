import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT = 3000;
  const logger = new Logger('NestApplication');
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);

  logger.log(`Server running on http://localhost:${PORT}`);
}
bootstrap();
