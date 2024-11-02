import { Injectable } from '@nestjs/common';
import { CreatePagoDto } from './dto/create-pago.dto';
import { UpdatePagoDto } from './dto/update-pago.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pago } from './entities/pago.entity';
import { Repository } from 'typeorm';
import { Alumno } from 'src/alumno/entities/alumno.entity';
import { TipoPago } from 'src/tipo-pago/entities/tipo-pago.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class PagoService {
  constructor(
    @InjectRepository(Pago)private readonly pagoReposiroy: Repository<Pago>,
    @InjectRepository(Alumno)private readonly alumnoRepository: Repository<Alumno>,
    @InjectRepository(TipoPago)private readonly tipoPagoRepository: Repository<TipoPago>,
    @InjectRepository(User)private readonly userRepository: Repository<User>,
  ){}


  // Crear pago 
  async create(createPagoDto: CreatePagoDto) {
    try {
      // Verifico que exista alumno por medio del id
      const alumno = await this.alumnoRepository.findOne({
        where: {id: createPagoDto.alumnoId}
      });

      // Verifico si la respuesta es nula
      if(!alumno){
        return {
          ok: false,
          message: 'No se encontro el alumno',
          status: 404,
        };
      }

      // Verifico que exista tipo pado por medio del id
      const tipoPago = await this.tipoPagoRepository.findOne({
        where: {id: createPagoDto.tipoPagoId}
      });

      // Verifico que la respuesta no sea nula
      if(!tipoPago){
        return {
          ok: false,
          message: 'Tipo Pago no encontrado',
          status: 404,
        };
      }

      // Verifico que exista el usuario admin
      const admin = await this.userRepository.findOne({
        where: {id: createPagoDto.adminId}
      });

      // Verifico que la respuesta no sea nula
      if(!admin){
        return {
          ok: false,
          message: 'Administrador no encontrado',
          status: 404,
        };
      }

      // Instancia de la entidad pago
      const pago = new Pago();
      pago.alumnoId = alumno;
      pago.multa = createPagoDto.multa;
      pago.tipoPagoId = tipoPago;
      pago.discount = createPagoDto.discount;
      pago.price = createPagoDto.price;
      pago.totalPagado = createPagoDto.totalPagado;
      pago.registrationDate = createPagoDto.registrationDate;
      pago.adminId = admin;
      pago.description = createPagoDto.description;

      // Guardo los datos en la base
      await this.pagoReposiroy.save(pago);

      // Mensaje de exito al crear
      return {
        ok: true,
        message: 'Pago creado con exito',
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

  // Obtener todos los pagos
  findAll() {
    return `This action returns all pago`;
  }

  // Buscar un pago por su id
  findOne(id: number) {
    return `This action returns a #${id} pago`;
  }

  // Modificar un pago.
  update(id: number, updatePagoDto: UpdatePagoDto) {
    return `This action updates a #${id} pago`;
  }

  // Elimnar un pago.
  remove(id: number) {
    return `This action removes a #${id} pago`;
  }
}
