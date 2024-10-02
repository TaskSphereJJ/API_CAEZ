import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PagoMesService } from './pago-mes.service';
import { CreatePagoMeDto } from './dto/create-pago-me.dto';
import { UpdatePagoMeDto } from './dto/update-pago-me.dto';

@Controller('pago-mes')
export class PagoMesController {
  constructor(private readonly pagoMesService: PagoMesService) {}

  @Post()
  create(@Body() createPagoMeDto: CreatePagoMeDto) {
    return this.pagoMesService.create(createPagoMeDto);
  }

  @Get()
  findAll() {
    return this.pagoMesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pagoMesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePagoMeDto: UpdatePagoMeDto) {
    return this.pagoMesService.update(+id, updatePagoMeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pagoMesService.remove(+id);
  }
}
