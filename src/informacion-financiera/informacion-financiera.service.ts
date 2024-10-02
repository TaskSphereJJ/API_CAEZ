import { Injectable } from '@nestjs/common';
import { CreateInformacionFinancieraDto } from './dto/create-informacion-financiera.dto';
import { UpdateInformacionFinancieraDto } from './dto/update-informacion-financiera.dto';

@Injectable()
export class InformacionFinancieraService {
  create(createInformacionFinancieraDto: CreateInformacionFinancieraDto) {
    return 'This action adds a new informacionFinanciera';
  }

  findAll() {
    return `This action returns all informacionFinanciera`;
  }

  findOne(id: number) {
    return `This action returns a #${id} informacionFinanciera`;
  }

  update(id: number, updateInformacionFinancieraDto: UpdateInformacionFinancieraDto) {
    return `This action updates a #${id} informacionFinanciera`;
  }

  remove(id: number) {
    return `This action removes a #${id} informacionFinanciera`;
  }
}
