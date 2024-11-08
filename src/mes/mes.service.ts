import { Injectable } from '@nestjs/common';
import { CreateMesDto } from './dto/create-me.dto';
import { UpdateMeDto } from './dto/update-me.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Mes } from './entities/me.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MesService {
  constructor(
    @InjectRepository(Mes) private readonly mesReposiory: Repository<Mes>
  ){}

  // Creat Mes  
  async create(createMesDto: CreateMesDto) {
    try {
      // Creacion de mes
      const mes = await this.mesReposiory.create(createMesDto)

      // Guardo el mes creado en la base 
      await this.mesReposiory.save(mes)

      // Mensaje de exito al crear el mes con estado 201
      return {
        ok: true,
        message: 'Mes creado con exito',
        status: 201,
      };
    } catch (error) {
      return {
        ok: false,
        message: error.message,
        status: 500,
      };
    }
  }

  // Obtener todos los meses
  findAll() {
    return `This action returns all mes`;
  }

  // Obtener un mes por su id
  findOne(id: number) {
    return `This action returns a #${id} me`;
  }

  // Modificar un mes.
  async update(id: number, updateMeDto: UpdateMeDto) {
    try {
      // Busco un  por mes su id
      const mes = await this.mesReposiory.findOne({where: { id }})

      // Verifico si la respuesta es null
      if(!mes){
        return {
          ok: false,
          message: 'Mes no encontrado',
          status: 404,
        };
      }

      // Actualizo el name
      mes.name = updateMeDto.name;

      // Guardo el resultado en la base
      await this.mesReposiory.save(mes);

      // Mensjae de exito al actualizar
      return {
        ok: true,
        message: 'Mes actualizado con exito',
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

  // Eliminar un mes.
  remove(id: number) {
    return `This action removes a #${id} me`;
  }
}
