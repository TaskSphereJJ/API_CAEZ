import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SexoService } from './sexo.service';
import { CreateSexoDto } from './dto/create-sexo.dto';
import { UpdateSexoDto } from './dto/update-sexo.dto';

@Controller('sexo')
export class SexoController {
  constructor(private readonly sexoService: SexoService) {}

  @Post()
  create(@Body() createSexoDto: CreateSexoDto) {
    return this.sexoService.create(createSexoDto);
  }

  @Get()
  findAll() {
    return this.sexoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sexoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSexoDto: UpdateSexoDto) {
    return this.sexoService.update(+id, updateSexoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sexoService.remove(+id);
  }
}
