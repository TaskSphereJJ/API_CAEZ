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


  // Crear direccion  
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

  // Obtener toodas las direcciones
  async findAll() {
    try {
      // Verifico si existen las direcciones por medio del estado activo
      const direction = await this.direccionRepository.find({
        where: { isActive: true}
      })

      // Verifico si las direcciones son mayor a cero
      if(direction.length > 0){
        return {
          oK: true,
          direction,
          status: 200,
        };
      }

      // En caso que no se encuentren muestro un mensaje de error
      return {
        oK: false,
        message: 'No se encontraron direcciones',
        status: 204,
      };
    } catch (error) {
      return {
        ok: false,
        message: error.message,
        status: 500,
      };
    }
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
