import { Module } from '@nestjs/common';
import { SexoService } from './sexo.service';
import { SexoController } from './sexo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sexo } from './entities/sexo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sexo])],
  controllers: [SexoController],
  providers: [SexoService],
})
export class SexoModule {}
