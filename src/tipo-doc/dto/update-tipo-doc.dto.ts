import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoDocDto } from './create-tipo-doc.dto';

export class UpdateTipoDocDto extends PartialType(CreateTipoDocDto) {}
