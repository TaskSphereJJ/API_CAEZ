import { Injectable } from '@nestjs/common';
import { CreatePagoDto } from './dto/create-pago.dto';
import { UpdatePagoDto } from './dto/update-pago.dto';

@Injectable()
export class PagoService {



  // Crear pago
  create(createPagoDto: CreatePagoDto) {
    return 'This action adds a new pago';
  }

  // Obtener todos los pagos
  findAll() {
    return `This action returns all pago`;
  }

  // Buscar un pago por su id
  findOne(id: number) {
    return `This action returns a #${id} pago`;
  }

  // Modificar un pago
  update(id: number, updatePagoDto: UpdatePagoDto) {
    return `This action updates a #${id} pago`;
  }

  // Elimnar un pago
  remove(id: number) {
    return `This action removes a #${id} pago`;
  }
}
