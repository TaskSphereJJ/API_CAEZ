import { Injectable } from '@nestjs/common';
import { CreateAlumnoGradoDto } from './dto/create-alumno-grado.dto';
import { UpdateAlumnoGradoDto } from './dto/update-alumno-grado.dto';

@Injectable()
export class AlumnoGradoService {



  // Metodo crear
  create(createAlumnoGradoDto: CreateAlumnoGradoDto) {
    return 'This action adds a new alumnoGrado';
  }

  // Metodo buscar todos
  findAll() {
    return `This action returns all alumnoGrado`;
  }

  // Metodo buscar uno
  findOne(id: number) {
    return `This action returns a #${id} alumnoGrado`;
  }

  // Metodo modificar
  update(id: number, updateAlumnoGradoDto: UpdateAlumnoGradoDto) {
    return `This action updates a #${id} alumnoGrado`;
  }

  // Metodo eliminar
  remove(id: number) {
    return `This action removes a #${id} alumnoGrado`;
  }
}
