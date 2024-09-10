import { Injectable } from '@nestjs/common';
import { CreateEncargadoDto } from './dto/create-encargado.dto';
import { UpdateEncargadoDto } from './dto/update-encargado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Encargado } from './entities/encargado.entity';
import { Repository } from 'typeorm';
import { Sexo } from 'src/sexo/entities/sexo.entity';

@Injectable()
export class EncargadoService {
  constructor(
    @InjectRepository(Encargado) private readonly encargadoReposiory: Repository<Encargado>,
    @InjectRepository(Sexo) private readonly sexoReposiory: Repository<Sexo>,
  ){}


  create(createEncargadoDto: CreateEncargadoDto) {
    return 'This action adds a new encargado';
  }

  findAll() {
    return `This action returns all encargado`;
  }

  findOne(id: number) {
    return `This action returns a #${id} encargado`;
  }

  update(id: number, updateEncargadoDto: UpdateEncargadoDto) {
    return `This action updates a #${id} encargado`;
  }

  remove(id: number) {
    return `This action removes a #${id} encargado`;
  }
}
