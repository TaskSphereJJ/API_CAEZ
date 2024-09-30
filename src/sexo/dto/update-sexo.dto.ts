import { PartialType } from '@nestjs/mapped-types';
import { CreateSexoDto } from './create-sexo.dto';

export class UpdateSexoDto extends PartialType(CreateSexoDto) {}
