import { Module } from '@nestjs/common';
import { PadrinoService } from './padrino.service';
import { PadrinoController } from './padrino.controller';

@Module({
  controllers: [PadrinoController],
  providers: [PadrinoService],
}) 
export class PadrinoModule {}
