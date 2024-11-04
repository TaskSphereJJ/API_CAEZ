import { Module } from '@nestjs/common';
import { AlumnoService } from './alumno.service';
import { AlumnoController } from './alumno.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alumno } from './entities/alumno.entity';
import { Sexo } from 'src/sexo/entities/sexo.entity';
import { Role } from 'src/roles/entities/role.entity';
import { Encargado } from 'src/encargado/entities/encargado.entity';
import { Enfermedad } from 'src/enfermedad/entities/enfermedad.entity';
import { Turno } from 'src/turno/entities/turno.entity';
import { Admin } from 'typeorm';
import { Padrino } from 'src/padrino/entities/padrino.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Alumno, Sexo, Role, Encargado, Enfermedad, Turno, Admin, Padrino])],
  controllers: [AlumnoController],
  providers: [AlumnoService],
}) 
export class AlumnoModule {}
