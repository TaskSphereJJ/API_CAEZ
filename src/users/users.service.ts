import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { Role } from 'src/roles/entities/role.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Role) private readonly roleRepository: Repository<Role>,
  ) { }

  // Metodo crear usuario
  async create(createUserDto: CreateUserDto) {
    try {
      // Busco el rol asociado a usuario
      const role = await this.roleRepository.findOne({
        where: { id: createUserDto.roleId }
      })

      // Verifico si rol es diferente de null
      if (!role) {
        return {
          ok: false,
          message: 'rol no encontrado',
          status: 404,
        };
      }

      // Instancia de usuario
      const user = new User();

      // Asigno los datos del DTO a la entidad usuario
      user.name = createUserDto.name;
      user.lastName = createUserDto.lastName;
      user.email = createUserDto.email;
      user.password = createUserDto.password;
      user.registrationDate = createUserDto.registrationDate || new Date();
      user.roleId = role;

      // Encripto la contraseña antes de guardarlo en la base de datos
      user.hashPassword();

      // Guardo el usuario en la base de datos
      await this.userRepository.save(user);

      // Mensaje de exito si el usuairo se creo correctamente con estado 201
      return {
        ok: true,
        message: 'Usuario creado con exito',
        status: 201,
      };


    } catch (error) {
      // Mensaje de error al guardar el usuario
      return {
        ok: false,
        message: error.message,
        status: 500,
      };
    }
  }

  // Obtener todos los usuarios
  async findAll() {
    try {
      // Verifico si esta activo
      const user = await this.userRepository.find({ where: { isActive: true } });

      // Verifico si la longitud es mayor a cero
      if (user.length > 0) {
        // Si es mayor a cero devuelvo los usuarios con estado 200
        return { ok: true, user, status: 200 };
      }

      // Si no se encontro nada retornar false con mensaje de error y estado 204
      return {
        ok: false,
        message: 'No se encontraron usuarios',
        status: 204
      }

    } catch (error) {
      return {
        ok: false,
        message: error.message,
        status: 500,
      };
    }
  }

  // Metodo para buscar un usuario en especifico
  async findOne(id: number) {
    try {
      // Busco al usuario por medio del id
      const user = await this.userRepository.findOne({where: { id }});

      // Verifico si user es diferente a null
      if(!user){
        // Mensaje de error de que no se encontro el usuario con estado 404
        return {ok: false, message: 'No se encontro el usuario', status: 404}
      }

      // Si se el usuario si se encontro devolver el usuario con estado 200
      return {
        ok: true,
        user,
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

  // Metodo para modificar usuario
  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      
    } catch (error) {
      
    }
  }

  // Metodo para eliminar un user
  async remove(id: number) {
    try {
      
    } catch (error) {
      
    }
  }
}
