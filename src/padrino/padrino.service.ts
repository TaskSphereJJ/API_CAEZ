import { Injectable } from '@nestjs/common';
import { CreatePadrinoDto } from './dto/create-padrino.dto';
import { UpdatePadrinoDto } from './dto/update-padrino.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Padrino } from './entities/padrino.entity';
import { Admin, Repository } from 'typeorm';
import { Role } from 'src/roles/entities/role.entity';
import { Sexo } from 'src/sexo/entities/sexo.entity';
import { Direccion } from 'src/direccion/entities/direccion.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class PadrinoService {
  constructor(
    @InjectRepository(Padrino)private readonly padrinoRepository: Repository<Padrino>,
    @InjectRepository(Role)private readonly roleRepository: Repository<Role>,
    @InjectRepository(Sexo)private readonly sexoRepository: Repository<Sexo>,
    @InjectRepository(Direccion)private readonly direccionRepository: Repository<Direccion>,
    @InjectRepository(User)private readonly userRepository: Repository<User>
  ) { }

  // Crear padrino
  async create(createPadrinoDto: CreatePadrinoDto) {
    try {
      // Verifico que exista rol por medio del id
      const role = await this.roleRepository.findOne({
        where:  {id: createPadrinoDto.roleId}
      });

      // Verifico que la respuesta no sea nula
      if(!role){
        return {
          ok: false,
          message: 'Rol no encontrado',
          status: 404,
        };
      }

      // Verifo que exista sexo por medio del id
      const sexo = await this.sexoRepository.findOne({
        where: {id: createPadrinoDto.sexoId}
      });

      // verifico si la respuestea es nula
      if(!sexo){
        return {
          ok: false,
          message: 'Sexo',
          status: 404,
        };
      }

      // Verifico que exista direccion por medio del id
      const direccion = await this.direccionRepository.findOne({
        where: {id: createPadrinoDto.direccionId}
      });

      // Verifico que exista usuario admin
      const admin = await this.userRepository.findOne({
        where: {id: createPadrinoDto.administradorId}
      });

      // Verifico si la respuesta es nula
      if(!admin){
        return {
          ok: false,
          message: 'Administrador no encontrado',
          status: 404,
        };
      }

      // Instancia del modelo padrino
      const padrino = new Padrino();
      padrino.name = createPadrinoDto.name;
      padrino.lastName = createPadrinoDto.lastName;
      padrino.phone = createPadrinoDto.phone;
      padrino.email = createPadrinoDto.email;
      padrino.registrationDate = createPadrinoDto.registrationDate || new Date();
      padrino.role = role;
      padrino.sexo = sexo;
      padrino.direccion = direccion;
      padrino.administrador = admin;

      // Guardo los datos en la base
      await this.padrinoRepository.save(padrino);

      // Mensaje de exito al crear un nuevo padrino
      return {
        ok: true,
        message: 'Padrino creado con exito',
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

  // Obtener todos los padrinos
  findAll() {
    return `This action returns all padrino`;
  }

  // Obtenr un padrino por su id
  findOne(id: number) {
    return `This action returns a #${id} padrino`;
  }

  // Modificar un padrino
  update(id: number, updatePadrinoDto: UpdatePadrinoDto) {
    return `This action updates a #${id} padrino`;
  }

  // Eliminar un padrino
  remove(id: number) {
    return `This action removes a #${id} padrino`;
  }
}
