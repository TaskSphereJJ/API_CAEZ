import { Injectable } from '@nestjs/common';
import { CreateInformacionFinancieraDto } from './dto/create-informacion-financiera.dto';
import { UpdateInformacionFinancieraDto } from './dto/update-informacion-financiera.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { InformacionFinanciera } from './entities/informacion-financiera.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InformacionFinancieraService {
  constructor(
    @InjectRepository(InformacionFinanciera)private readonly infoFinancieraRepository: Repository<InformacionFinanciera>,
  ){}

  // Crear info-financiera
  async create(createInformacionFinancieraDto: CreateInformacionFinancieraDto) {
try {
      // Creacion de IF
      const IF = await this.infoFinancieraRepository.create(createInformacionFinancieraDto);
  
      // Guardo el resultado en la base 
      await this.infoFinancieraRepository.save(IF);
  
      // Mensaje de exito al guardar
      return {
        ok: true,
        message: 'Informacion Financiera creada con exito',
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

  // Obtener toda la info-financiera
  findAll() {
    return `This action returns all informacionFinanciera`;
  }

  // Obtener una info por su id
  findOne(id: number) {
    return `This action returns a #${id} informacionFinanciera`;
  }

  // Modificar info-financiera por su id.
  async update(id: number, updateInformacionFinancieraDto: UpdateInformacionFinancieraDto) {
    try {
      // Busco IF por su id
      const infoFinanciera = await this.infoFinancieraRepository.findOne({ where: { id }});

      // Verifico si la respuesta es nula
      if(!infoFinanciera){
        return {
          ok: false,
          message: 'Información financiera no encontrada',
          status: 404,
        };
      }

      // Actualizo los datos si se proporcionan si no mantengo el actual
      infoFinanciera.fondoActual = updateInformacionFinancieraDto.fondoActual || infoFinanciera.fondoActual;
      infoFinanciera.deudaTotal = updateInformacionFinancieraDto.deudaTotal || infoFinanciera.deudaTotal;
      infoFinanciera.salgoPorCompletar = updateInformacionFinancieraDto.salgoPorCompletar || infoFinanciera.salgoPorCompletar;
      infoFinanciera.numStudent = updateInformacionFinancieraDto.numStudent || infoFinanciera.numStudent;

      // Guardo el resultado en la base
      await this.infoFinancieraRepository.save(infoFinanciera);

      // Mensaje de exito al actualizar 
      return {
        ok: true,
        message: 'Información financiera actualizada con exito',
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

  // Eliminar una info
  remove(id: number) {
    return `This action removes a #${id} informacionFinanciera`;
  }
}
