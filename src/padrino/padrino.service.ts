import { Injectable } from '@nestjs/common';
import { CreatePadrinoDto } from './dto/create-padrino.dto';
import { UpdatePadrinoDto } from './dto/update-padrino.dto';

@Injectable()
export class PadrinoService {
  constructor() { }

  // Crear padrino
  create(createPadrinoDto: CreatePadrinoDto) {
    return 'This action adds a new padrino';
  }

  // Obtener todos los padrinos
  findAll() {
    return `This action returns all padrino`;
  }

  // Obtenr un padrino por su id
  findOne(id: number) {
    return `This action returns a #${id} padrino`;
  }

  // Modificar un padrino
  update(id: number, updatePadrinoDto: UpdatePadrinoDto) {
    return `This action updates a #${id} padrino`;
  }

  // Eliminar un padrino
  remove(id: number) {
    return `This action removes a #${id} padrino`;
  }
}
