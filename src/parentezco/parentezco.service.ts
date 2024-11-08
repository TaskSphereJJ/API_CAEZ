import { Injectable } from '@nestjs/common';
import { CreateParentezcoDto } from './dto/create-parentezco.dto';
import { UpdateParentezcoDto } from './dto/update-parentezco.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Parentezco } from './entities/parentezco.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ParentezcoService {
  constructor(
    @InjectRepository(Parentezco) private readonly parentezcoRepository: Repository<Parentezco>
  ) { }

  // Crear Parentezco 
  async create(createParentezcoDto: CreateParentezcoDto) {
    try {
      // Creacion de parentezco
      const parentezco = await this.parentezcoRepository.create(createParentezcoDto)

      // Guardo el parentezco en la base luego de crearlo
      await this.parentezcoRepository.save(parentezco)

      // Mensaje de exito al crear con estado 201
      return {
        ok: true,
        message: 'Perentezco creado con exito',
        status: 201,
      };

    }
    catch (error) {
      return {
        ok: false,
        message: error.message,
        status: 500,
      };
    }
  }

  // Obtener todos los parentezcos
  findAll() {
    return `This action returns all parentezco`;
  }

  findOne(id: number) {
    return `This action returns a #${id} parentezco`;
  }

  // Modificar perentezco
  async update(id: number, updateParentezcoDto: UpdateParentezcoDto) {
    try {
      // Busco el parentezco por medio del id
      const parentezco = await this.parentezcoRepository.findOne({ where: { id } });

      // Verifico si parentezco es null
      if (!parentezco) {
        return {
          ok: false,
          message: 'Parentezco no encontrado',
          status: 404,
        };
      }

      // Actualizo el name por medio del DTO
      parentezco.name = updateParentezcoDto.name;

      // Guardo el parentezco en la base
      await this.parentezcoRepository.save(parentezco);

      // Mensaje de exito al actualizar el parentezco 
      return {
        ok: true,
        message: 'Parentezco actualizado con exito',
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

  // Eliminar parentezco
  remove(id: number) {
    return `This action removes a #${id} parentezco`;
  }
}
