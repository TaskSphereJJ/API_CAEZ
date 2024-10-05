import { Injectable } from '@nestjs/common';
import { CreateFacturaDto } from './dto/create-factura.dto';
import { UpdateFacturaDto } from './dto/update-factura.dto';

@Injectable()
export class FacturaService {
  constructor() { }

  // Crear factura
  create(createFacturaDto: CreateFacturaDto) {
    return 'This action adds a new factura';
  }

  // Obtener todas las facturas
  findAll() {
    return `This action returns all factura`;
  }

  // Buscar una factura por su id
  findOne(id: number) {
    return `This action returns a #${id} factura`;
  }

  // Modificar factura.
  update(id: number, updateFacturaDto: UpdateFacturaDto) {
    return `This action updates a #${id} factura`;
  }

  // Eliminar factura
  remove(id: number) {
    return `This action removes a #${id} factura`;
  }
}
