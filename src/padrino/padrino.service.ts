import { Injectable } from '@nestjs/common';
import { CreatePadrinoDto } from './dto/create-padrino.dto';
import { UpdatePadrinoDto } from './dto/update-padrino.dto';

@Injectable()
export class PadrinoService {
  create(createPadrinoDto: CreatePadrinoDto) {
    return 'This action adds a new padrino';
  }

  findAll() {
    return `This action returns all padrino`;
  }

  findOne(id: number) {
    return `This action returns a #${id} padrino`;
  }

  update(id: number, updatePadrinoDto: UpdatePadrinoDto) {
    return `This action updates a #${id} padrino`;
  }

  remove(id: number) {
    return `This action removes a #${id} padrino`;
  }
}
