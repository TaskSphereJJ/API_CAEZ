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

  // Metodo crear
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

  findAll() {
    return `This action returns all parentezco`;
  }

  findOne(id: number) {
    return `This action returns a #${id} parentezco`;
  }

  // Modificar perentezco
  update(id: number, updateParentezcoDto: UpdateParentezcoDto) {
    return `This action updates a #${id} parentezco`;
  }

  // Eliminar parentezco
  remove(id: number) {
    return `This action removes a #${id} parentezco`;
  }
}
