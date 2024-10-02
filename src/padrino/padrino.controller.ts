import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PadrinoService } from './padrino.service';
import { CreatePadrinoDto } from './dto/create-padrino.dto';
import { UpdatePadrinoDto } from './dto/update-padrino.dto';

@Controller('padrino')
export class PadrinoController {
  constructor(private readonly padrinoService: PadrinoService) {}

  @Post()
  create(@Body() createPadrinoDto: CreatePadrinoDto) {
    return this.padrinoService.create(createPadrinoDto);
  }

  @Get()
  findAll() {
    return this.padrinoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.padrinoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePadrinoDto: UpdatePadrinoDto) {
    return this.padrinoService.update(+id, updatePadrinoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.padrinoService.remove(+id);
  }
}
