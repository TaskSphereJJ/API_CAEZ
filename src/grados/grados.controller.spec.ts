import { Test, TestingModule } from '@nestjs/testing';
import { GradosController } from './grados.controller';
import { GradosService } from './grados.service';

describe('GradosController', () => {
  let controller: GradosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GradosController],
      providers: [GradosService],
    }).compile();

    controller = module.get<GradosController>(GradosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
