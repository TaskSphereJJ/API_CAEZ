import { Injectable } from '@nestjs/common';
import { CreateInformacionFinancieraDto } from './dto/create-informacion-financiera.dto';
import { UpdateInformacionFinancieraDto } from './dto/update-informacion-financiera.dto';

@Injectable()
export class InformacionFinancieraService {


  // Crear info-financiera
  create(createInformacionFinancieraDto: CreateInformacionFinancieraDto) {
    return 'This action adds a new informacionFinanciera';
  }

  // Obtener toda la info-financiera
  findAll() {
    return `This action returns all informacionFinanciera`;
  }

  // Obtener una info por su id
  findOne(id: number) {
    return `This action returns a #${id} informacionFinanciera`;
  }

  // Modificar info-financiera por su id
  update(id: number, updateInformacionFinancieraDto: UpdateInformacionFinancieraDto) {
    return `This action updates a #${id} informacionFinanciera`;
  }

  // Eliminar una info
  remove(id: number) {
    return `This action removes a #${id} informacionFinanciera`;
  }
}
