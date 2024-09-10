import { Module } from '@nestjs/common';
import { EncargadoService } from './encargado.service';
import { EncargadoController } from './encargado.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Encargado } from './entities/encargado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Encargado])],
  controllers: [EncargadoController],
  providers: [EncargadoService],
})
export class EncargadoModule {}
