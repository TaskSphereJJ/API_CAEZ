import { Injectable } from '@nestjs/common';
import { CreateTurnoDto } from './dto/create-turno.dto';
import { UpdateTurnoDto } from './dto/update-turno.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Turno } from './entities/turno.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TurnoService {
  constructor(
    @InjectRepository(Turno) private readonly turnoRepository: Repository<Turno>
  ){}

  // Crear turno 
  async create(createTurnoDto: CreateTurnoDto) {
    try {
      // Creacion de turno
      const turno = await this.turnoRepository.create(createTurnoDto)
      // Lo guardo en la base de datos
      await this.turnoRepository.save(turno)

      // Mensaje de exito al crear un turno con estado 201 de recien creado
      return {
        ok: true,
        message: 'Turno creado con exito',
        status: 201,
      };
    } catch (error) {
      return {
        ok: false,
        message: error.message,
        status: 500
      }
    }
  }

  // Obtener todos los turnos
  findAll() {
    return `This action returns all turno`;
  }

  findOne(id: number) {
    return `This action returns a #${id} turno`;
  }

  update(id: number, updateTurnoDto: UpdateTurnoDto) {
    return `This action updates a #${id} turno`;
  }

  remove(id: number) {
    return `This action removes a #${id} turno`;
  }
}
