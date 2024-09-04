import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GradosService } from './grados.service';
import { CreateGradoDto } from './dto/create-grado.dto';
import { UpdateGradoDto } from './dto/update-grado.dto';

@Controller('grados')
export class GradosController {
  constructor(private readonly gradosService: GradosService) {}

  @Post()
  create(@Body() createGradoDto: CreateGradoDto) {
    return this.gradosService.create(createGradoDto);
  }

  @Get()
  findAll() {
    return this.gradosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gradosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGradoDto: UpdateGradoDto) {
    return this.gradosService.update(+id, updateGradoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gradosService.remove(+id);
  }
}
