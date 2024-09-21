import { PartialType } from '@nestjs/mapped-types';
import { CreateEnfermedadDto } from './create-enfermedad.dto';

export class UpdateEnfermedadDto extends PartialType(CreateEnfermedadDto) {}
