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
  @InjectRepository(Pago)private readonly pagoRepository: Repository<Pago>,
  @InjectRepository(Mes)private readonly mesRepository: Repository<Mes>
 ){}

  // Crear pago mes
  async create(createPagoMeDto: CreatePagoMeDto) {
    try {
      // Verifico que exista pago por medio del id
      // porque no funciona el id??
      const pago = await this.pagoRepository.findOne({
        where: {id: createPagoMeDto.pagoId}
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
      await this.pagoRepository.save(pagoMes);
       
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

  async update(id: number, updatePagoMeDto: UpdatePagoMeDto) {
    try {
      // Busca `PagoMe` incluyendo las relaciones definidas con `pago` y `mes`
      const pagoMes = await this.pagoMesRepository.findOne({
        where: { id },
        relations: ['pagoId', 'mesId']
      });
  
      // Verifica si el resultado es nulo
      if (!pagoMes) {
        return {
          ok: false,
          message: 'Pago mes no encontrado',
          status: 404,
        };
      }
  
      // Verificar si se proporciona un pago por medio del DTO
      if (updatePagoMeDto.pagoId) {
        const newPago = await this.pagoRepository.findOne({ where: { id: updatePagoMeDto.pagoId } });
        if (!newPago) {
          return {
            ok: false,
            message: 'Pago no encontrado',
            status: 404,
          };
        }
        pagoMes.pagoId = newPago;
      } else {
        // Si no se proporciona un nuevo pago mantengo el actual
        pagoMes.pagoId = pagoMes.pagoId;
      }
  
      // Verificar si se proporciona un `mesId` en el DTO
      if (updatePagoMeDto.mesId) {
        const mes = await this.mesRepository.findOne({ where: { id: updatePagoMeDto.mesId } });
        if (!mes) {
          return {
            ok: false,
            message: 'Mes no encontrado',
            status: 404,
          };
        }
        pagoMes.mesId = mes; // Asigna la nueva relación
      } else {
        pagoMes.mesId = pagoMes.mesId;
      }
  
      // Guarda los cambios en la base de datos
      await this.pagoMesRepository.save(pagoMes);
  
      return {
        ok: true,
        message: 'Pago mes actualizado con éxito',
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
    return `This action removes a #${id} pagoMe`;
  }
}
