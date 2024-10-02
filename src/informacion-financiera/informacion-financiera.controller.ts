import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InformacionFinancieraService } from './informacion-financiera.service';
import { CreateInformacionFinancieraDto } from './dto/create-informacion-financiera.dto';
import { UpdateInformacionFinancieraDto } from './dto/update-informacion-financiera.dto';

@Controller('informacion-financiera')
export class InformacionFinancieraController {
  constructor(private readonly informacionFinancieraService: InformacionFinancieraService) {}

  @Post()
  create(@Body() createInformacionFinancieraDto: CreateInformacionFinancieraDto) {
    return this.informacionFinancieraService.create(createInformacionFinancieraDto);
  }

  @Get()
  findAll() {
    return this.informacionFinancieraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.informacionFinancieraService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInformacionFinancieraDto: UpdateInformacionFinancieraDto) {
    return this.informacionFinancieraService.update(+id, updateInformacionFinancieraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.informacionFinancieraService.remove(+id);
  }
}
