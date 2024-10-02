import { Module } from '@nestjs/common';
import { PagoMesService } from './pago-mes.service';
import { PagoMesController } from './pago-mes.controller';

@Module({
  controllers: [PagoMesController],
  providers: [PagoMesService],
})
export class PagoMesModule {}
