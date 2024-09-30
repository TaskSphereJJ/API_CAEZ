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

  // Metodo crear
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

  findAll() {
    return `This action returns all mes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} me`;
  }

  update(id: number, updateMeDto: UpdateMeDto) {
    return `This action updates a #${id} me`;
  }

  remove(id: number) {
    return `This action removes a #${id} me`;
  }
}
