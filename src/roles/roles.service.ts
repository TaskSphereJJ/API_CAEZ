import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role) private readonly roleRepository: Repository<Role>
  ) { }

  // Metodo crear  
  async create(createRoleDto: CreateRoleDto) {
    try {
      // Creacion de rol
      const role = await this.roleRepository.create(createRoleDto)

      // Lo guardo en la base de datos
      await this.roleRepository.save(role)

      // Mensaje de exito al crear el rol
      return {
        ok: true,
        message: 'Rol creado con exito',
        status: 201
      }
    } catch (error) {
      return {
        ok: false,
        message: error.messagem,
        status: 500,
      };
    }
  }

  // Obtener todos los roles
  async findAll() {
    try {
      // Busco los roles por estado activo
      const role = await this.roleRepository.find(
        {
          where: { isActive: true },
        });

      if (role.length > 0) {
        return { ok: true, role, status: 200 };
      }

      return { ok: false, message: 'No se encontraron roles', status: 404 };

    } catch (error) {
      return {
        ok: false,
        message: 'Ocurrio un error al obtener los roles',
        status: 500,
      };
    }

  }

  findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  // Actualizar role
  async update(id: number, updateRoleDto: UpdateRoleDto) {
    try {
      // Busco el rol por medio del id
      const rol = await this.roleRepository.findOne({ where: { id } });

      // Verifico si rol es null
      if (!rol) {
        return {
          ok: false,
          message: 'Rol no encotrado',
          status: 404,
        };
      }

      // Actualizo el name
      rol.name = updateRoleDto.name;

      // Guardo el resultado en la base
      await this.roleRepository.save(rol);

      // Mensaje de exito al actualizar el rol
      return {
        ok: true,
        message: 'Rol actualizado con exito',
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

  remove(id: number) {
    return `This action removes a #${id} role`;
  } 
}
