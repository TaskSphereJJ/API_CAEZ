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
  ) { }

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

  // Modificar turno
  async update(id: number, updateTurnoDto: UpdateTurnoDto) {
    try {
      // Busco a un turno por medio del id incluyendo relaciones
      const turno = await this.turnoRepository.findOne({
        where: { id }
      })

      // Verifico si es null
      if (!turno) {
        return {
          ok: false,
          message: 'Turno no encontrado',
          status: 404,
        };
      }
 
      // Actualizo el nombre del turno, si se proporciona si no se mantiene el actual
      turno.name = updateTurnoDto.name || turno.name;

      // Guardo el resultado en la base
      await this.turnoRepository.save(turno);

      // Mensaje de exito al actualizar
      return {
        ok: true,
        message: 'Turno no encontrado',
        status: 404,
      };

    } catch (error) {
      return {
        ok: false,
        message: error.message,
        status: 500,
      };
    }
  }

  remove(id: number) {
    return `This action removes a #${id} turno`;
  }
}
