import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoPagoDto } from './create-tipo-pago.dto';

export class UpdateTipoPagoDto extends PartialType(CreateTipoPagoDto) {}
