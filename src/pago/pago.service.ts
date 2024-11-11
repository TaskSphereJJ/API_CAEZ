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
    @InjectRepository(Pago) private readonly pagoReposiroy: Repository<Pago>,
    @InjectRepository(Alumno) private readonly alumnoRepository: Repository<Alumno>,
    @InjectRepository(TipoPago) private readonly tipoPagoRepository: Repository<TipoPago>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) { }


  // Crear pago  
  async create(createPagoDto: CreatePagoDto) {
    try {
      // Verifico que exista alumno por medio del id
      const alumno = await this.alumnoRepository.findOne({
        where: { id: createPagoDto.alumnoId }
      });

      // Verifico si la respuesta es nula
      if (!alumno) {
        return {
          ok: false,
          message: 'No se encontro el alumno',
          status: 404,
        };
      }

      // Verifico que exista tipo pado por medio del id
      const tipoPago = await this.tipoPagoRepository.findOne({
        where: { id: createPagoDto.tipoPagoId }
      });

      // Verifico que la respuesta no sea nula
      if (!tipoPago) {
        return {
          ok: false,
          message: 'Tipo Pago no encontrado',
          status: 404,
        };
      }

      // Verifico que exista el usuario admin
      const admin = await this.userRepository.findOne({
        where: { id: createPagoDto.adminId }
      });

      // Verifico que la respuesta no sea nula
      if (!admin) {
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
  async update(id: number, updatePagoDto: UpdatePagoDto) {
    try {
      // Busco un pago por medio del id incluyendo relaciones
      const pago = await this.pagoReposiroy.findOne({
        where: { id },
        relations: ['alumnoId', 'tipoPagoId', 'adminId'],
      });

      // Verifico que pago no sea null
      if (!pago) {
        return {
          ok: false,
          messsage: 'Pago no encontrado',
          status: 404,
        };
      }

      // Verifico si no se proporciona un nuevo alumno por medio del dto
      if (updatePagoDto.alumnoId) {
        // Busco el alumno por id
        const newAlumno = await this.alumnoRepository.findOne({ where: { id: updatePagoDto.alumnoId } });

        // Verifico si el nuevo alumno es nulo
        if (!newAlumno) {
          return {
            ok: false,
            message: 'Alumno no encontrado',
            status: 404,
          };
        }

        // Asigno el nuevo alumno a pago
        pago.alumnoId = newAlumno;
      } else {
        // Si no se proporciona un nuevo alumno se mantiene el actual
        pago.alumnoId = pago.alumnoId;
      }

      // Verifico si se proporciona un nuevo tipo pago por medio del dto
      if (updatePagoDto.tipoPagoId) {
        // Busco el tipo pago por su id
        const tipoPago = await this.tipoPagoRepository.findOne({ where: { id: updatePagoDto.tipoPagoId } });

        // Verifico si el nuevo tipo pago es nulo
        if (!tipoPago) {
          return {
            ok: false,
            message: 'Tipo Pago no encontrado',
            status: 404,
          };
        }

        // Asigno el nuevo tipo pago a pago
        pago.tipoPagoId = tipoPago;
      } else {
        // Si no se proporciona un nuevo tipo pago mantengo el actual
        pago.tipoPagoId = pago.tipoPagoId;
      }

      // Verifico si se proporciona un nuevo admin por medio del dto
      if (updatePagoDto.adminId) {
        // Busco un usuario admin por medio del dto
        const admin = await this.userRepository.findOne({ where: { id: updatePagoDto.adminId } });

        // Verifico si admin es nulo
        if (!admin) {
          return {
            ok: false,
            message: 'Admin no encotrado',
            satus: 404,
          };
        }

        // Asigno el nuevo admin a pago
        pago.adminId = admin;
      } else {
        // Si no se proporciona un  nuevo admin mantengo el actual
        pago.adminId = pago.adminId;
      }

      // Actualizo los demas datos si se proporcionan si no mantengo el actual  
      pago.multa = updatePagoDto.multa || pago.multa;
      pago.discount = updatePagoDto.discount || pago.discount;
      pago.price = updatePagoDto.price || pago.price;
      pago.totalPagado = updatePagoDto.totalPagado || pago.totalPagado;
      pago.registrationDate = updatePagoDto.registrationDate || pago.registrationDate;
      pago.description = updatePagoDto.description || pago.description;

      // Guardo el resultado en la base
      await this.pagoReposiroy.save(pago);

      // Mensaje de exito al actualizar pago
      return {
        ok: true,
        message: 'Pago actualizado con exito',
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

  // Elimnar un pago. 
  remove(id: number) {
    return `This action removes a #${id} pago`;
  }
}
