import { Injectable } from '@nestjs/common';
import { CreateTipoDocDto } from './dto/create-tipo-doc.dto';
import { UpdateTipoDocDto } from './dto/update-tipo-doc.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoDoc } from './entities/tipo-doc.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TipoDocService {
  constructor(
    @InjectRepository(TipoDoc) private readonly tipoDocumentoRepository: Repository<TipoDoc>
  ){}

  // Metodo crear tipo-doc
  async create(createTipoDocumentoDto: CreateTipoDocDto) {
    try {
      // Creacion de tipo-documento
      const tipoDoc = await this.tipoDocumentoRepository.create(createTipoDocumentoDto)

      // Guardo el tipo-doc creado en la base de datos
      await this.tipoDocumentoRepository.save(tipoDoc)

      // Mensaje de exito al crear con estado 201
      return {
        ok: true,
        message: 'Tipo-Documento crado con exito',
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

  findAll() {
    return `This action returns all tipoDoc`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoDoc`;
  }

  update(id: number, updateTipoDocDto: UpdateTipoDocDto) {
    return `This action updates a #${id} tipoDoc`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoDoc`;
  }
}
