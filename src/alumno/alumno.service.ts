import { Injectable } from '@nestjs/common';
import { CreateAlumnoDto } from './dto/create-alumno.dto';
import { UpdateAlumnoDto } from './dto/update-alumno.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Alumno } from './entities/alumno.entity';
import { Repository } from 'typeorm';
import { Sexo } from 'src/sexo/entities/sexo.entity';
import { Role } from 'src/roles/entities/role.entity';
import { Encargado } from 'src/encargado/entities/encargado.entity';
import { Enfermedad } from 'src/enfermedad/entities/enfermedad.entity';
import { Turno } from 'src/turno/entities/turno.entity';
import { Padrino } from 'src/padrino/entities/padrino.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AlumnoService {
  constructor(
    @InjectRepository(Alumno) private readonly alumnoRespository: Repository<Alumno>,
    @InjectRepository(Sexo) private readonly sexoRespository: Repository<Sexo>,
    @InjectRepository(Role) private readonly roleRespository: Repository<Role>,
    @InjectRepository(Encargado) private readonly encargadoRespository: Repository<Encargado>,
    @InjectRepository(Enfermedad) private readonly enfermedadRespository: Repository<Enfermedad>,
    @InjectRepository(Turno) private readonly turnoRespository: Repository<Turno>,
    @InjectRepository(User) private readonly adminRespository: Repository<User>,
    @InjectRepository(Padrino) private readonly padrinoRespository: Repository<Padrino>
  ) { }

  // Crear alumno
  async create(createAlumnoDto: CreateAlumnoDto) {
    try {
      // Verifico que exista Sexo por medio del id
      const sexo = await this.sexoRespository.findOne({
        where: { id: createAlumnoDto.sexoId }
      });

      // Verifico que la respuesta no sea null
      if (!sexo) {
        return {
          ok: false,
          message: 'Sexo no encontrado',
          status: 404,
        };
      }

      // Verifico que role exista por medio del id
      const role = await this.roleRespository.findOne({
        where: { id: createAlumnoDto.roleId }
      });

      // Verifico si la respuesta es null
      if (!role) {
        return {
          ok: false,
          message: 'Role no encontrado',
          status: 404,
        };
      }

      // Verifico que encargado exista por medio del id
      const encargado = await this.encargadoRespository.findOne({
        where: { id: createAlumnoDto.encargadoId }
      });

      // Verifico si encargado viene null
      if (!encargado) {
        return {
          ok: false,
          message: 'Encargado no encontrado',
          status: 404,
        }
      }

      // Verifico que enfermedad exista por medio del id
      const enfermedad = await this.enfermedadRespository.findOne({
        where: { id: createAlumnoDto.enfermedadId }
      });

      // Verifico si la respuesta es nula
      if (!enfermedad) {
        return {
          ok: false,
          message: 'Enfermedad no encontrada',
          status: 404,
        };
      }

      // Verico que turno exista por medio del id
      const turno = await this.turnoRespository.findOne({
        where: { id: createAlumnoDto.turnoId }
      });

      // Verifico que la respuesta no sea nula
      if (!turno) {
        return {
          ok: false,
          message: 'Turno no encontrado',
          status: 404
        };
      }

      // Verifico que admin exista por medio del id
      const admin = await this.adminRespository.findOne({
        where: { id: createAlumnoDto.administradorId }
      });

      // Verifico si la respuesta es nula
      if (!admin) {
        return {
          ok: false,
          message: 'Administrador no encontrado',
          status: 404,
        };
      }


      // Verifico que padrino exista por medio del id
      const padrino = await this.padrinoRespository.findOne({
        where: { id: createAlumnoDto.padrinoId }
      });

      // Verifico si la respuesta es nula
      if (!padrino) {
        return {
          ok: false,
          message: 'Padrino no encontrado',
          status: 404,
        };
      }


      // Instancia de la entidad alumno para agregarle datos
      const alumno = new Alumno();
      alumno.name = createAlumnoDto.name;
      alumno.lastName = createAlumnoDto.lastName;
      alumno.registrationDate = createAlumnoDto.registrationDate || new Date();
      alumno.documentNumber = createAlumnoDto.documentNumber;
      alumno.esBecado = alumno.esBecado;
      alumno.sexoId = sexo;
      alumno.roleId = role;
      alumno.encargadoId = encargado;
      alumno.enfermedadId = enfermedad;
      alumno.turnoId = turno;
      alumno.administradorId = admin;
      alumno.padrinoId = padrino;

      // Guardo el alumno con los datos asignados
      await this.alumnoRespository.save(alumno);

      // Mensaje de exito al guardar 
      return {
        ok: true,
        message: 'Alumno creado con exito',
        status: 201
      }

    } catch (error) {
      return {
        oK: false,
        message: error.message,
        status: 404,
      };
    }
  }

  // Meotdo para buscar todos los alumnos
  findAll() {
    return `This action returns all alumno`;
  }

  // Buscar un alumno por id
  findOne(id: number) {
    return `This action returns a #${id} alumno`;
  }

  // Modificar alumno
  update(id: number, updateAlumnoDto: UpdateAlumnoDto) {
    return `This action updates a #${id} alumno`;
  }

  // Eliminar alumno
  remove(id: number) {
    return `This action removes a #${id} alumno`;
  }
}
