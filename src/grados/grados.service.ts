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

  // Metodo crear grado
  async create(createGradoDto: CreateGradoDto) {
    try {
      // Creacion de grado
      const grado = await this.gradoRepository.create(createGradoDto);
      
      // Guardo el grado en la base de datos
      await this.gradoRepository.save(grado);

      // Mensaje de exito al crear el creado con estado 201
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
  update(id: number, updateGradoDto: UpdateGradoDto) {
    return `This action updates a #${id} grado`;
  }

  // Eliminar grado
  remove(id: number) {
    return `This action removes a #${id} grado`;
  }
}
