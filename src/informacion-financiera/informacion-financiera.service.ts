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
  update(id: number, updateInformacionFinancieraDto: UpdateInformacionFinancieraDto) {
    return `This action updates a #${id} informacionFinanciera`;
  }

  // Eliminar una info
  remove(id: number) {
    return `This action removes a #${id} informacionFinanciera`;
  }
}
