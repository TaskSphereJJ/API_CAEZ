import { Test, TestingModule } from '@nestjs/testing';
import { DireccionService } from './direccion.service';

describe('DireccionService', () => {
  let service: DireccionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DireccionService],
    }).compile();

    service = module.get<DireccionService>(DireccionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
