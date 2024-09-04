import { Module } from '@nestjs/common';
import { DireccionService } from './direccion.service';
import { DireccionController } from './direccion.controller';

@Module({
  controllers: [DireccionController],
  providers: [DireccionService],
})
export class DireccionModule {}
