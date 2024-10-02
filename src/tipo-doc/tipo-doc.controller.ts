import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoDocService } from './tipo-doc.service';
import { CreateTipoDocDto } from './dto/create-tipo-doc.dto';
import { UpdateTipoDocDto } from './dto/update-tipo-doc.dto';

@Controller('tipo-doc')
export class TipoDocController {
  constructor(private readonly tipoDocService: TipoDocService) {}

  @Post()
  create(@Body() createTipoDocDto: CreateTipoDocDto) {
    return this.tipoDocService.create(createTipoDocDto);
  }

  @Get()
  findAll() {
    return this.tipoDocService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoDocService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoDocDto: UpdateTipoDocDto) {
    return this.tipoDocService.update(+id, updateTipoDocDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoDocService.remove(+id);
  }
}
