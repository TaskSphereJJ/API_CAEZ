import { PartialType } from '@nestjs/mapped-types';
import { CreatePagoMeDto } from './create-pago-me.dto';

export class UpdatePagoMeDto extends PartialType(CreatePagoMeDto) {}
