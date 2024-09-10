import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AlumnoGradoService } from './alumno-grado.service';
import { CreateAlumnoGradoDto } from './dto/create-alumno-grado.dto';
import { UpdateAlumnoGradoDto } from './dto/update-alumno-grado.dto';

@Controller('alumno-grado')
export class AlumnoGradoController {
  constructor(private readonly alumnoGradoService: AlumnoGradoService) {}

  @Post()
  create(@Body() createAlumnoGradoDto: CreateAlumnoGradoDto) {
    return this.alumnoGradoService.create(createAlumnoGradoDto);
  }

  @Get()
  findAll() {
    return this.alumnoGradoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.alumnoGradoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAlumnoGradoDto: UpdateAlumnoGradoDto) {
    return this.alumnoGradoService.update(+id, updateAlumnoGradoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.alumnoGradoService.remove(+id);
  }
}
