import { Test, TestingModule } from '@nestjs/testing';
import { TurnoController } from './turno.controller';
import { TurnoService } from './turno.service';

describe('TurnoController', () => {
  let controller: TurnoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TurnoController],
      providers: [TurnoService],
    }).compile();

    controller = module.get<TurnoController>(TurnoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
