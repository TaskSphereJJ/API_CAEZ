import { Injectable } from '@nestjs/common';
import { CreateEncargadoDto } from './dto/create-encargado.dto';
import { UpdateEncargadoDto } from './dto/update-encargado.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Encargado } from './entities/encargado.entity';
import { Repository } from 'typeorm';
import { Sexo } from 'src/sexo/entities/sexo.entity';
import { Role } from 'src/roles/entities/role.entity';
import { Direccion } from 'src/direccion/entities/direccion.entity';
import { TipoDoc } from 'src/tipo-doc/entities/tipo-doc.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class EncargadoService {
  constructor(
    @InjectRepository(Encargado) private readonly encargadoReposiory: Repository<Encargado>,
    @InjectRepository(Role) private readonly roleReposiory: Repository<Role>,
    @InjectRepository(Sexo) private readonly sexoReposiory: Repository<Sexo>,
    @InjectRepository(Direccion) private readonly direccionReposiory: Repository<Direccion>,
    @InjectRepository(TipoDoc) private readonly tipoDocReposiory: Repository<TipoDoc>,
    @InjectRepository(User) private readonly adminReposiory: Repository<User>
  ) { }

  // Crear encargado
  async create(createEncargadoDto: CreateEncargadoDto) {
    try {
      // Verifico que exista Role por medio del id
      const role = await this.roleReposiory.findOne({
        where: { id: createEncargadoDto.roleId }
      });

      // Verifico que la respuesta no sea nula
      if (!role) {
        return {
          ok: false,
          message: 'Rol no encontrado',
          status: 404,
        };
      }

      // Verifico que sexo exista por  medio del id
      const sexo = await this.sexoReposiory.findOne({
        where: { id: createEncargadoDto.sexoId }
      });

      // Verifico que sexo no sea nulo
      if (!sexo) {
        return {
          oK: false,
          message: 'Sexo no encontrado',
          status: 404,
        };
      }

      // Verifico que exista Direccion por medio del id
      const direccion = await this.direccionReposiory.findOne({
        where: { id: createEncargadoDto.direccionId }
      });

      // Verifico si la respuesta es nula
      if (!direccion) {
        return {
          ok: false,
          message: 'Direccion no encontrada',
          status: 404,
        };
      }

      // Verifico que tipo documento exista por medio del id
      // const tipoDoc = await this.tipoDocReposiory.findOne({
      //   where: {id: createEncargadoDto.tipoDocumentoId}
      // });

      // // Verifico si la respuesta es nula
      // if(!tipoDoc){
      //   return {
      //     ok: false,
      //     message: 'Tipo Documento no encontrado',
      //     status: 404,
      //   };
      // }

      // Verifico que usuario admin exista por medio del id

      const admin = await this.adminReposiory.findOne({
        where: { id: createEncargadoDto.administratorId }
      });

      // Verifico si adminstrador es nulo
      if (!admin) {
        return {
          ok: false,
          message: 'Administrador no encontrado',
          status: 404,
        };
      }

      // Instancia de la entidad tipo documento
      const encargado = new Encargado();
      encargado.name = createEncargadoDto.name;
      encargado.lastName = createEncargadoDto.lastName;
      encargado.email = createEncargadoDto.email;
      encargado.password = createEncargadoDto.password;
      encargado.registrationDate = createEncargadoDto.registrationDate || new Date();
      encargado.phone = createEncargadoDto.phone;
      encargado.emergencyPhone = createEncargadoDto.emergencyPhone;
      encargado.documentNumber = createEncargadoDto.documentNumber;
      encargado.roleId = role;
      encargado.sexoId = sexo;
      encargado.direccionId = direccion;
      encargado.administratorId = admin;

      encargado.hashPassword();

      // Guardo los datos en la base de datos
      await this.encargadoReposiory.save(encargado);

      // Mensaje de exito al crear encargado
      return {
        ok: true,
        message: 'Encargado creado con exito',
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

  // Obtener todos los encargados
  async findAll() {
    try {
      // Verifico si estan activos
      const encargado = await this.encargadoReposiory.find({
        where: { isActive: true }
      });

      // Verifico si la longitud es mayor a cero
      if (encargado.length > 0) {
        return {
          ok: true,
          encargado,
          status: 200,
        };
      }

      // Si no se encuentran encargados mostrar mensaje de error
      return {
        ok: false,
        message: 'No se encontraron encargados',
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

  // Buscar a un encargado por su id
  findOne(id: number) {
    return `This action returns a #${id} encargado`;
  }

  // Modificar un encargado.
  update(id: number, updateEncargadoDto: UpdateEncargadoDto) {
    return `This action updates a #${id} encargado`;
  }

  // Eliminar un encargado
  remove(id: number) {
    return `This action removes a #${id} encargado`;
  }
}
