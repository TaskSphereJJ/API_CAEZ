import { Injectable } from '@nestjs/common';
import { CreateGradoDto } from './dto/create-grado.dto';
import { UpdateGradoDto } from './dto/update-grado.dto';

@Injectable()
export class GradosService {
  create(createGradoDto: CreateGradoDto) {
    return 'This action adds a new grado';
  }

  findAll() {
    return `This action returns all grados`;
  }

  findOne(id: number) {
    return `This action returns a #${id} grado`;
  }

  update(id: number, updateGradoDto: UpdateGradoDto) {
    return `This action updates a #${id} grado`;
  }

  remove(id: number) {
    return `This action removes a #${id} grado`;
  }
}
