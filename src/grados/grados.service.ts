import { Injectable } from '@nestjs/common';
import { CreateGradoDto } from './dto/create-grado.dto';
import { UpdateGradoDto } from './dto/update-grado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Grado } from './entities/grado.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GradosService {
  constructor(
    @InjectRepository(Grado) private readonly gradoRepository: Repository<Grado>
  ){}

  // Crear grado
  async create(createGradoDto: CreateGradoDto) {
    try {
      // Creacion de grado  
      const grado = await this.gradoRepository.create(createGradoDto);
      
      // Guardo el grado en la base de datos
      await this.gradoRepository.save(grado);

      // Mensaje de exito al crear el creado con estado 201 de recien creado
      return {
        ok: true,
        message: 'Grado creado con exito',
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

  // Obtener todos los grados
  findAll() {
    return `This action returns all grados`;
  }

  // Obtener un grado por su id
  findOne(id: number) {
    return `This action returns a #${id} grado`;
  }

  // Modificar grado
  async update(id: number, updateGradoDto: UpdateGradoDto) {
    try {
      // Busco un grado por su id
      const grado = await this.gradoRepository.findOne({where: { id }});

      // Verifico si grado es nulo
      if(!grado){
        return {
          ok: false,
          message: 'Grado no encontrado',
          status: 404,
        };
      }

      // Actualizo el name
      grado.name = updateGradoDto.name;

      // Lo guardo en la base
      await this.gradoRepository.save(grado);

      // Mensaje de exito al actualizar
      return {
        ok: true,
        message: 'Grado actualizado con exito',
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

  // Eliminar grado.
  remove(id: number) {
    return `This action removes a #${id} grado`;
  }
}
