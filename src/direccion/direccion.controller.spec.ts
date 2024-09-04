import { Test, TestingModule } from '@nestjs/testing';
import { DireccionController } from './direccion.controller';
import { DireccionService } from './direccion.service';

describe('DireccionController', () => {
  let controller: DireccionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DireccionController],
      providers: [DireccionService],
    }).compile();

    controller = module.get<DireccionController>(DireccionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
