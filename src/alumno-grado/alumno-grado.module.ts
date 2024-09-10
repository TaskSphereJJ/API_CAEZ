import { Module } from '@nestjs/common';
import { AlumnoGradoService } from './alumno-grado.service';
import { AlumnoGradoController } from './alumno-grado.controller';

@Module({
  controllers: [AlumnoGradoController],
  providers: [AlumnoGradoService],
})
export class AlumnoGradoModule {}
