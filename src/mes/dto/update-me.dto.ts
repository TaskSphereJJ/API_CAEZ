import { PartialType } from '@nestjs/mapped-types';
import { CreateMesDto } from './create-me.dto';

export class UpdateMeDto extends PartialType(CreateMesDto) {}
