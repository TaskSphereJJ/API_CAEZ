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
        where: {Id: createFacturaDto.pagoId }
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
  update(id: number, updateFacturaDto: UpdateFacturaDto) {
    return `This action updates a #${id} factura`;
  }

  // Eliminar factura
  remove(id: number) {
    return `This action removes a #${id} factura`;
  }
}
