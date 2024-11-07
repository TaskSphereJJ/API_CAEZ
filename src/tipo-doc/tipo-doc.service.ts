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

  // Obtener todos los tipo documentos
  findAll() {
    return `This action returns all tipoDoc`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoDoc`;
  }

  // Modificar tipo doc
  async update(id: number, updateTipoDocDto: UpdateTipoDocDto) {
    try {
      // Busco tipo doc por id
      const tipoDoc = await this.tipoDocumentoRepository.findOne({where:{ id }});

      // Verifico si la respuesta es null
      if(!tipoDoc){
        return {
          ok: false,
          message: 'Tipo Documento no encontrado',
          status: 404,
        };
      }

      // Actualizo el nombre
      tipoDoc.name = updateTipoDocDto.name;

      // Guardo el resultado en la base
      await this.tipoDocumentoRepository.save(tipoDoc);

      // Mensaje de exito al actualizar
      return {
        ok: true,
        message: 'Tipo Documento actualizado con exito',
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

  remove(id: number) {
    return `This action removes a #${id} tipoDoc`;
  }
}
