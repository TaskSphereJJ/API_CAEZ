import { Injectable } from '@nestjs/common';
import { CreateFacturaDto } from './dto/create-factura.dto';
import { UpdateFacturaDto } from './dto/update-factura.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Factura } from './entities/factura.entity';
import { Repository } from 'typeorm';
import { Pago } from 'src/pago/entities/pago.entity';
import { Alumno } from 'src/alumno/entities/alumno.entity';

@Injectable()
export class FacturaService {
  constructor(
    @InjectRepository(Factura) private readonly facturaRepository: Repository<Factura>,
    @InjectRepository(Pago) private readonly pagoRepository: Repository<Pago>,
    @InjectRepository(Alumno) private readonly alumnoRepository: Repository<Alumno>
  ) { }

  // Crear factura
  async create(createFacturaDto: CreateFacturaDto) {
    try {
      // Verifico que exista pago por medio del Id
      const pago = await this.pagoRepository.findOne({
        where: { id: createFacturaDto.pagoId }
      });

      // Verifico si la respuesta es nula
      if (!pago) {
        return {
          ok: false,
          message: 'Pago no encontrado',
          status: 404,
        };
      }

      // Verifico que exista alumno por medio del id
      const alumno = await this.alumnoRepository.findOne({
        where: { id: createFacturaDto.alumnoId }
      });

      // Verifico si alumno es nulo
      if (!alumno) {
        return {
          ok: false,
          message: 'Alumno no encontrado',
          status: 404,
        };
      }

      // Instancia del modelo de factura
      const factura = new Factura();
      factura.pdfRoute = createFacturaDto.pdfRoute;

      // Guardo el resultado en la base 
      await this.facturaRepository.save(factura);

      // Mensaje de exito al crear la factura
      return {
        ok: true,
        message: 'Factura creada con exito',
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

  // Obtener todas las facturas
  findAll() {
    return `This action returns all factura`;
  }

  // Buscar una factura por su id 
  findOne(id: number) {
    return `This action returns a #${id} factura`;
  }

  // Modificar factura. 
  async update(id: number, updateFacturaDto: UpdateFacturaDto) {
    try {
      // Busco una factura por su id incluyendo relaciones
      const factura = await this.facturaRepository.findOne({
        where: { id },
        relations: ['pagoId', 'alumnoId'],
      });

      // Verifico si factura es null
      if (!factura) {
        return {
          ok: false,
          message: 'Factura no encontrada',
          status: 404,
        };
      }

      // Verifico si se proporciona un nuevo pago 
      if (updateFacturaDto.pagoId) {
        // Busco un pago por su id
        const pago = await this.pagoRepository.findOne({ where: { id: updateFacturaDto.pagoId } });

        // Verifico si pago es null
        if (!pago) {
          return {
            ok: false,
            message: 'Pago no encontrado',
            status: 404,
          };
        }

        // Asigno el nuevo pago a factura
        factura.pagoId = pago;
      } else {
        // Si no se proporciona un nuevo pago mantengo el actual
        factura.pagoId = factura.pagoId;
      }

      // Verfico si se proporciona un nuevo alumno
      if (updateFacturaDto.alumnoId) {
        // Busco un alumno por su id
        const alumno = await this.alumnoRepository.findOne({ where: { id: updateFacturaDto.alumnoId } });

        // Verifico si alumno es null
        if (!alumno) {
          return {
            ok: false,
            message: 'Alumno no encotrado',
            status: 404,
          };
        }

        // Asigno el nuevo alumno a factura
        factura.alumnoId = alumno;
      } else {
        // Si no se proporciona un nuevo alumno mantengo el actual
        factura.alumnoId = factura.alumnoId;
      }

      // Actualizo los demas campos si se proporcionan si no mantengo el actual
      factura.pdfRoute = updateFacturaDto.pdfRoute || factura.pdfRoute;

      // Guardo los datos en la base
      await this.facturaRepository.save(factura);

      // Mensaje de exito al actualizar factura
      return {
        ok: true,
        message: 'Factura actualizada con exito',
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

  // Eliminar factura 
  remove(id: number) {
    return `This action removes a #${id} factura`;
  }
}
