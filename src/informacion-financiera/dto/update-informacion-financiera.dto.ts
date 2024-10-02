import { PartialType } from '@nestjs/mapped-types';
import { CreateInformacionFinancieraDto } from './create-informacion-financiera.dto';

export class UpdateInformacionFinancieraDto extends PartialType(CreateInformacionFinancieraDto) {}
