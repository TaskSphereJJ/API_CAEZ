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
  ){}

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

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
