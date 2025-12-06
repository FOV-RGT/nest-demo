import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './modules/app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const logger = new Logger('AppModule');
    const port = parseInt(process.env.PORT ?? '3000', 10) || 3000;
    await app.listen(port);
    logger.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();

function run() {}

run();
