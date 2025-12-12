import { Test, TestingModule } from '@nestjs/testing';
import { ColaService } from '@/modules/cola/cola.service';

describe('ColaService', () => {
    let service: ColaService;
    let module: TestingModule;

    beforeEach(async () => {
        module = await Test.createTestingModule({
            providers: [ColaService],
        }).compile();
        service = module.get(ColaService);
    });

    afterAll(async () => {
        await module.close();
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
