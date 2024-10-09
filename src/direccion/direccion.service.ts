import { Injectable } from '@nestjs/common';
import { CreateDireccionDto } from './dto/create-direccion.dto';
import { UpdateDireccionDto } from './dto/update-direccion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Direccion } from './entities/direccion.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DireccionService {
  constructor(
    @InjectRepository(Direccion) private readonly direccionRepository: Repository <Direccion>,
  ){}


  // Metod crear
  async create(createDireccionDto: CreateDireccionDto) {
    try {
      // Crear una direccion
      const direccion = await this.direccionRepository.create(createDireccionDto)
      // Lo guardo en la base de datos
      await this.direccionRepository.save(direccion)

      // Mensaje de exito de creacion con estado 201
      return {
        ok: true,
        message: 'direccion creada con exito',
        status: 201,
      }

    } catch (error) {
      // Mensaje de error al crear con estado 500
      return {
        ok: false,
        message: error.message,
        status: 500,
      };
    }
  }

  // Metodo encontrar todo
  findAll() {
    return `This action returns all direccion`;
  }

  // Metodo buscar uno
  findOne(id: number) {
    return `This action returns a #${id} direccion`;
  }

  // Modificar direccion
  update(id: number, updateDireccionDto: UpdateDireccionDto) {
    return `This action updates a #${id} direccion`;
  }

  // Metodo eliminar.
  remove(id: number) {
    return `This action removes a #${id} direccion`;
  }
}
