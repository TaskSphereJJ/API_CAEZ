import { Injectable } from '@nestjs/common';
import { CreateSexoDto } from './dto/create-sexo.dto';
import { UpdateSexoDto } from './dto/update-sexo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Sexo } from './entities/sexo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SexoService {
  constructor(
    @InjectRepository(Sexo) private readonly sexoRepository: Repository<Sexo>
  ) { }

  // Crear sexo  
  async create(createSexoDto: CreateSexoDto) {
    try {
      // Creacion de sexo
      const sexo = await this.sexoRepository.create(createSexoDto)

      // Lo guardo en la base de datos
      await this.sexoRepository.save(sexo)

      // Mensaje de exito con estado 201
      return {
        ok: true,
        message: 'Sexo creado con exito',
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

  // Obtener todos los sexos 
  findAll() {
    return `This action returns all sexo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sexo`;
  }

  // Modificar sexo
  async update(id: number, updateSexoDto: UpdateSexoDto) {
    try {
      // Busco el sexo por medio del id
      const sexo = await this.sexoRepository.findOne({ where: { id } });

      // Verifico si la respuesta es nula
      if (!sexo) {
        return {
          ok: false,
          message: 'Sexo no encontrado',
          status: 404,
        };
      }

      // Acualizo el nombre
      sexo.name = updateSexoDto.name;

      // Guardo el resultado en la base
      await this.sexoRepository.save(sexo);

      // Mensaje de exito al actualizar sexo
      return {
        ok: true,
        message: 'Sexo actualizado con exito',
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
    return `This action removes a #${id} sexo`;
  }
}
