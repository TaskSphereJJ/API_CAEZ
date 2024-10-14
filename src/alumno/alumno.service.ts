import { Injectable } from '@nestjs/common';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';

@Injectable()
export class AlumnoService {


  // Metodo para crear alumno
  create(createAlumnoDto: CreateAlumnoDto) {
    return 'This action adds a new alumno';
  }

  // Meotdo para buscar todos los alumnos
  findAll() {
    return `This action returns all alumno`;
  }

  // Buscar un alumno por id
  findOne(id: number) {
    return `This action returns a #${id} alumno`;
  }

  // Modificar alumno
  update(id: number, updateAlumnoDto: UpdateAlumnoDto) {
    return `This action updates a #${id} alumno`;
  }

  // Eliminar alumno
  remove(id: number) {
    return `This action removes a #${id} alumno`;
  }
}
