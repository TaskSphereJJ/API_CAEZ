import { Module } from '@nestjs/common';
import { PagoService } from './pago.service';
import { PagoController } from './pago.controller';

@Module({
  controllers: [PagoController],
  providers: [PagoService],
})
export class PagoModule {}
