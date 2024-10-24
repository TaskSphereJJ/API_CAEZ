import { Injectable } from '@nestjs/common';
import { CreatePagoMeDto } from './dto/create-pago-me.dto';
import { UpdatePagoMeDto } from './dto/update-pago-me.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PagoMe } from './entities/pago-me.entity';
import { Repository } from 'typeorm';
import { Pago } from 'src/pago/entities/pago.entity';
import { Mes } from 'src/mes/entities/me.entity';

@Injectable()
export class PagoMesService {
 constructor(
  @InjectRepository(PagoMe)private readonly pagoMesRepository: Repository<PagoMe>,
  @InjectRepository(Pago)private readonly pagosRepository: Repository<Pago>,
  @InjectRepository(Mes)private readonly mesRepository: Repository<Mes>
 ){}

  // Crear pago mes
  async create(createPagoMeDto: CreatePagoMeDto) {
    try {
      // Verifico que exista pago por medio del id
      // porque no funciona el id??
      const pago = await this.pagosRepository.findOne({
        where: {Id: createPagoMeDto.pagoId}
      });

      // Verifico que la respuesta no sea nula
      if(!pago){
        return {
          ok: false,
          message: 'Pago no encontrado',
          status: 404,
        };
      }

      // Verifico que existe mes por medio del id
      const mes = await this.mesRepository.findOne({
        where: {id: createPagoMeDto.mesId}
      });

      // Evaluo que la respuesta no sea nula
      if(!mes){
        return {
          ok: false,
          message: 'Pago Mes no encontrado',
          status: 404
        }
      }

      // Instancia de la entidad Pago - Mes
      const pagoMes = new PagoMe();
      pagoMes.pagoId = pago;
      pagoMes.mesId = mes;

      // Guardo los datos en la base
      await this.pagosRepository.save(pagoMes);
       
      // Mensaje de exito al crear un pago mes
      return {
        ok: true,
        message: 'No se enconro el Pago Mes',
        status: 201,
      };

    } catch (error) {
      return {
        ok: false,
        message: error.message,
        status:500,
      };
    }
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
