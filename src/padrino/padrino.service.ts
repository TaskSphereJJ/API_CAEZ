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
  async update(id: number, updatePadrinoDto: UpdatePadrinoDto) {
    try {
      // Buscar padrino por medio de su id incluyendo relaciones
      const padrino = await this.padrinoRepository.findOne({
        where: { id },
        relations: ['roleId', 'sexoId', 'direccionId', 'administradorId'],
      });

      // Verifico si padrino es null
      if(!padrino){
        return {
          ok: false,
          message: 'Padrino no encontrado',
          status: 404,
        };
      }

      // Verifico si se proporciona un nuevo rol
      if(updatePadrinoDto.roleId){
        // Busco el rol por id
        const rol = await this.roleRepository.findOne({where: { id }});

        // Verifico si la respuesta es null
        if(!rol){
          return {
            ok: false,
            message: 'Rol no encontrado',
            status:404,
          };
        }

        // ????????????????????????????
        // Asigno el nuevo rol a padrino
        padrino.role = rol;
      } else {
        // Si no se proporciona un nuevo rol mantengo el actual
        padrino.role = padrino.role;
      }

      // Verifico si se proporciona un nuevo sexo
      if(updatePadrinoDto.sexoId) {
        // Busco sexo por id
        const sex = await this.sexoRepository.findOne({where: { id:updatePadrinoDto.sexoId}});

        // Verifico si sexo es nulo
        if(!sex){
          return {
            ok: false,
            message: 'Sexo no encontrado',
            status: 404,
          };
        }

        // Asigno el nuevo sexo a padrino  
        padrino.sexo = sex;
      } else {
        // Si no se proporciona un nuevo sexo mantengo el actual
        padrino.sexo = padrino.sexo;
      }

      // Verifico si se proporciona una nueva direccion 
      if(updatePadrinoDto.direccionId){
        // Busco la direccion por su id
        const direccion = await this.direccionRepository.findOne({where: {id: updatePadrinoDto.direccionId}});

        // Verifico si direccion es nula
        if(!direccion) {
          return {
            ok: false,
            message: 'Dirección no encontrada',
            status: 404,
          };
        }

        // Asigno la nueva direccion a padrino
        padrino.direccion = direccion;
      } else {
        // Si no se proporciona una nueva direccion mantengo la actual
        padrino.direccion = padrino.direccion;
      }

      // Verifico si se proporciona un nuevo administrador
      if(updatePadrinoDto.administradorId) {
        // Busco a usuario admin por id
        const admin = await this.userRepository.findOne({where: {id: updatePadrinoDto.administradorId}});

        // Verifico que user admin no sea null
        if(!admin) {
          return {
            ok: false,
            messsage: 'Administrador no encontrado',
            status: 404,
          };
        }

        // Asigno el nuevo admin a padrino
        padrino.administrador = admin;
      } else {
        // Si no se proporciona un nuevo admin mantengo el actual
        padrino.administrador = padrino.administrador;
      }

      // Actualizo los demas campos si se proporcionan si no mantengo el actual
      padrino.name = updatePadrinoDto.name || padrino.name;
      padrino.lastName = updatePadrinoDto.lastName || padrino.lastName;
      padrino.phone = updatePadrinoDto.phone || padrino.phone;
      padrino.email = updatePadrinoDto.email || padrino.email;
      padrino.registrationDate = updatePadrinoDto.registrationDate || padrino.registrationDate;

      // Guardo los nuevos datos en la base
      await this.padrinoRepository.save(padrino);

      // Mensaje de exito al guardar
      return {
        ok: true,
        message: 'Padrino actualizado con exito',
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

  // Eliminar un padrino
  remove(id: number) {
    return `This action removes a #${id} padrino`;
  }
}
