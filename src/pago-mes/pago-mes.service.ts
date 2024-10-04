import { Injectable } from '@nestjs/common';
import { CreatePagoMeDto } from './dto/create-pago-me.dto';
import { UpdatePagoMeDto } from './dto/update-pago-me.dto';

@Injectable()
export class PagoMesService {


  // Crear pago mes
  create(createPagoMeDto: CreatePagoMeDto) {
    return 'This action adds a new pagoMe';
  }

  findAll() {
    return `This action returns all pagoMes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pagoMe`;
  }

  update(id: number, updatePagoMeDto: UpdatePagoMeDto) {
    return `This action updates a #${id} pagoMe`;
  }

  remove(id: number) {
    return `This action removes a #${id} pagoMe`;
  }
}
