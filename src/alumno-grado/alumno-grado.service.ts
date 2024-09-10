import { Injectable } from '@nestjs/common';
import { CreateAlumnoGradoDto } from './dto/create-alumno-grado.dto';
import { UpdateAlumnoGradoDto } from './dto/update-alumno-grado.dto';

@Injectable()
export class AlumnoGradoService {
  create(createAlumnoGradoDto: CreateAlumnoGradoDto) {
    return 'This action adds a new alumnoGrado';
  }

  findAll() {
    return `This action returns all alumnoGrado`;
  }

  findOne(id: number) {
    return `This action returns a #${id} alumnoGrado`;
  }

  update(id: number, updateAlumnoGradoDto: UpdateAlumnoGradoDto) {
    return `This action updates a #${id} alumnoGrado`;
  }

  remove(id: number) {
    return `This action removes a #${id} alumnoGrado`;
  }
}
