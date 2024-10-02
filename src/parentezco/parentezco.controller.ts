import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParentezcoService } from './parentezco.service';
import { CreateParentezcoDto } from './dto/create-parentezco.dto';
import { UpdateParentezcoDto } from './dto/update-parentezco.dto';

@Controller('parentezco')
export class ParentezcoController {
  constructor(private readonly parentezcoService: ParentezcoService) {}

  @Post()
  create(@Body() createParentezcoDto: CreateParentezcoDto) {
    return this.parentezcoService.create(createParentezcoDto);
  }

  @Get()
  findAll() {
    return this.parentezcoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parentezcoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParentezcoDto: UpdateParentezcoDto) {
    return this.parentezcoService.update(+id, updateParentezcoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parentezcoService.remove(+id);
  }
}
