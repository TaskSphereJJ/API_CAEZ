import { Test, TestingModule } from '@nestjs/testing';
import { GradosService } from './grados.service';

describe('GradosService', () => {
  let service: GradosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GradosService],
    }).compile();

    service = module.get<GradosService>(GradosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
