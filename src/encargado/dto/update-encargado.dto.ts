import { PartialType } from '@nestjs/mapped-types';
import { CreateEncargadoDto } from './create-encargado.dto';

export class UpdateEncargadoDto extends PartialType(CreateEncargadoDto) {}
