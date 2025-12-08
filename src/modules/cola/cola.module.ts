import { Module } from '@nestjs/common';
import { ColaController } from './cola.controller';
import { ColaService } from './cola.service';

@Module({
    controllers: [ColaController],
    providers: [ColaService],
})
export class ColaModule {}
