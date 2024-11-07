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

  // Modificar tipo-pago
  async update(id: number, updateTipoPagoDto: UpdateTipoPagoDto) {
    try {
      // Busco tipo pago por id
      const tipoPago = await this.tipoPagoRepository.findOne({where: {id}});

      // Verifico si tipo pago es null
      if(!tipoPago){
        return {
          ok: false,
          message: 'Tipo Pago no encontrado',
          status: 404,
        };
      }

      // Actualizo el nombre
      tipoPago.name = updateTipoPagoDto.name;

      // Guardo el resultado en la base 
      await this.tipoPagoRepository.save(tipoPago);

      // Mensaje de exito al actualizar
      return {
        ok: true,
        message: 'Tipo Pago actualizado con exito',
        status: 200,
      };
    } catch (error) {
      return {
        ok: false,
        message: error.message,
        status: 500,
      };
    }
  }

  remove(id: number) {
    return `This action removes a #${id} tipoPago`;
  }
}
