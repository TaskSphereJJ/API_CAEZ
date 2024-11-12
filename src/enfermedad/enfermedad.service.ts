import { Injectable } from '@nestjs/common';
import { CreateEnfermedadDto } from './dto/create-enfermedad.dto';
import { UpdateEnfermedadDto } from './dto/update-enfermedad.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Enfermedad } from './entities/enfermedad.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EnfermedadService {
  constructor(
    @InjectRepository(Enfermedad) private readonly enfermedadRepository: Repository<Enfermedad>
  ) { }

  // Crear enfermedad
  async create(createEnfermedadDto: CreateEnfermedadDto) {
    try {
      // Creacion de enfermedad por medio del Dto
      const enfermedad = await this.enfermedadRepository.create(createEnfermedadDto)

      // Guardo la enfermedad en la base de datos
      await this.enfermedadRepository.save(enfermedad)

      // Mensaje de exito al crear enfermedad con estado 201
      return {
        ok: true,
        message: 'Enfermedad creada con exito',
        status: 201,
      };
    } catch (error) {

    }
  }

  // Obtenr todas las enfermedades
  async findAll() {
    try {
      // Verifico si estan activas
      const enfermedad = await this.enfermedadRepository.find({
        where: { isActive: true }
      });

      // Verifico si la longitud es mayor a 0
      if (enfermedad.length > 0) {
        return {
          ok: true,
          enfermedad,
          status: 200,
        };
      }

      // En caso de que no se encuentren enfermedades   
      return {
        ok: false,
        message: 'No se encontraron enfermedades',
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

  // Obtener una enfermedad en especifico por su id
  async findOne(id: number) {
    try {

    } catch (error) {

    }
  }

  // Modificar una enfermedad.
  async update(id: number, updateEnfermedadDto: UpdateEnfermedadDto) {
    try {
      // Busco una enfermedad por su id
      const enfermedad = await this.enfermedadRepository.findOne({ where: { id } });

      // Verifico si es null
      if (!enfermedad) {
        return {
          ok: false,
          message: 'Enfermedad no encontrada',
          status: 404,
        };
      }

      // Actualizo los datos si se proporcionan si no mantengo el actual
      enfermedad.name = updateEnfermedadDto.name || enfermedad.name;
      enfermedad.descripcion = updateEnfermedadDto.descripcion || enfermedad.descripcion;

      // Guardo el resultado en la base
      await this.enfermedadRepository.save(enfermedad);

      // Mensaje de exito al actualizar 
      return {
        ok: true,
        message: 'Enfermedad actualizada con exito',
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

  // Metodo para eliminar una enfermedad
  remove(id: number) {
    return `This action removes a #${id} enfermedad`;
  }
}
