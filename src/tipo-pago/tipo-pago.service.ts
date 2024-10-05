import { Injectable } from '@nestjs/common';
import { CreateTipoPagoDto } from './dto/create-tipo-pago.dto';
import { UpdateTipoPagoDto } from './dto/update-tipo-pago.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoPago } from './entities/tipo-pago.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TipoPagoService {
  constructor(
    @InjectRepository(TipoPago) private readonly tipoPagoRepository: Repository<TipoPago>
  ){}

  // Metodo crear tipo-pago
  async create(createTipoPagoDto: CreateTipoPagoDto) {
    try {
      // Creo el tipo-pago
      const tipoPago = await this.tipoPagoRepository.create(createTipoPagoDto)
  
      // Lo guardo en la base de datos
      await this.tipoPagoRepository.save(tipoPago)
  
      // Mensaje de exito con estado 201
      return {
        ok: true,
        message: 'Tipo-Pago creado con exito',
        status: 201
      }
    } catch (error) {
      return {
        ok: false,
        message: error.message,
        status: 500,
      };
    }
  }

  // Obtener todos los tipo pago
  findAll() {
    return `This action returns all tipoPago`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoPago`;
  }

  update(id: number, updateTipoPagoDto: UpdateTipoPagoDto) {
    return `This action updates a #${id} tipoPago`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoPago`;
  }
}
