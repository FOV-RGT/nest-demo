import { Test, TestingModule } from '@nestjs/testing';
import { ColaController } from '@/modules/cola/cola.controller';
import { ColaService } from '@/modules/cola/cola.service';
import { PrismaService } from '@/common/prisma.service';

describe('ColaController', () => {
    let controller: ColaController;
    let module: TestingModule;

    beforeEach(async () => {
        module = await Test.createTestingModule({
            controllers: [ColaController],
            providers: [ColaService, PrismaService],
        }).compile();
        controller = module.get(ColaController);
    });

    afterAll(async () => {
        await module.close();
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
