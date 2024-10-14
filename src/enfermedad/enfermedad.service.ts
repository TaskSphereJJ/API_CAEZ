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
  ){}

  // Crear enfermedad
  async create(createEnfermedadDto: CreateEnfermedadDto) {
    try {
      // Creacion de enfermedad
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
  findAll() {
    return `This action returns all enfermedad`;
  }

  // Metodo para buscar una enfermedad en especifico por su id
  findOne(id: number) {
    return `This action returns a #${id} enfermedad`;
  }

  // Modificar una enfermedad.
  update(id: number, updateEnfermedadDto: UpdateEnfermedadDto) {
    return `This action updates a #${id} enfermedad`;
  }

  // Metodo para eliminar una enfermedad
  remove(id: number) {
    return `This action removes a #${id} enfermedad`;
  }
}
