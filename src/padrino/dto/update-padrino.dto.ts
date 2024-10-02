import { PartialType } from '@nestjs/mapped-types';
import { CreatePadrinoDto } from './create-padrino.dto';

export class UpdatePadrinoDto extends PartialType(CreatePadrinoDto) {}
