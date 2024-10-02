import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoPagoService } from './tipo-pago.service';
import { CreateTipoPagoDto } from './dto/create-tipo-pago.dto';
import { UpdateTipoPagoDto } from './dto/update-tipo-pago.dto';

@Controller('tipo-pago')
export class TipoPagoController {
  constructor(private readonly tipoPagoService: TipoPagoService) {}

  @Post()
  create(@Body() createTipoPagoDto: CreateTipoPagoDto) {
    return this.tipoPagoService.create(createTipoPagoDto);
  }

  @Get()
  findAll() {
    return this.tipoPagoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoPagoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoPagoDto: UpdateTipoPagoDto) {
    return this.tipoPagoService.update(+id, updateTipoPagoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoPagoService.remove(+id);
  }
}
