import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EncargadoService } from './encargado.service';
import { CreateEncargadoDto } from './dto/create-encargado.dto';
import { UpdateEncargadoDto } from './dto/update-encargado.dto';

@Controller('encargado')
export class EncargadoController {
  constructor(private readonly encargadoService: EncargadoService) {}

  @Post()
  create(@Body() createEncargadoDto: CreateEncargadoDto) {
    return this.encargadoService.create(createEncargadoDto);
  }

  @Get()
  findAll() {
    return this.encargadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.encargadoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEncargadoDto: UpdateEncargadoDto) {
    return this.encargadoService.update(+id, updateEncargadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.encargadoService.remove(+id);
  }
}
