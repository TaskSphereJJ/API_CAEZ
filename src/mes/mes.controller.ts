import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MesService } from './mes.service';
import { CreateMesDto } from './dto/create-me.dto';
import { UpdateMeDto } from './dto/update-me.dto';

@Controller('mes')
export class MesController {
  constructor(private readonly mesService: MesService) {}

  @Post()
  create(@Body() createMeDto: CreateMesDto) {
    return this.mesService.create(createMeDto);
  }

  @Get()
  findAll() {
    return this.mesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMeDto: UpdateMeDto) {
    return this.mesService.update(+id, updateMeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mesService.remove(+id);
  }
}
