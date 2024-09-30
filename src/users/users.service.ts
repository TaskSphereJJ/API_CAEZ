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
  ){}

  // Metodo crear usuario
  async create(createUserDto: CreateUserDto) {
    try {
      // Busco el rol asociado a usuario
      const role = await this.roleRepository.findOne({
        where:{ id: createUserDto.roleId }
      })

      // Verifico si rol es diferente de null
      if(!role){
        return {
          ok: false,
          message: 'rol no encontrado',
          status: 404,
        };
      }

      // Instancia de usuario
      const user = new User();

      // Asigno los datos del DTO a la entidad usuario
      user.name       = createUserDto.name;
      user.lastName   = createUserDto.lastName;
      user.email      = createUserDto.email;
      user.password   = createUserDto.password;
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

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
