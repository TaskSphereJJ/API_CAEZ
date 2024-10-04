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

// Metodo crear encargado
  create(createEncargadoDto: CreateEncargadoDto) {
    return 'This action adds a new encargado';
  }

  // Metodo para obtener todos los encargados
  findAll() {
    return `This action returns all encargado`;
  }

  // Metodo para buscar a un encargado por su id
  findOne(id: number) {
    return `This action returns a #${id} encargado`;
  }

  // Metodo para modificar un encargado.
  update(id: number, updateEncargadoDto: UpdateEncargadoDto) {
    return `This action updates a #${id} encargado`;
  }

  // Metodo para eliminar un encargado
  remove(id: number) {
    return `This action removes a #${id} encargado`;
  }
}
