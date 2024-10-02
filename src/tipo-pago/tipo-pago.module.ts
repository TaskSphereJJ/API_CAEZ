import { Module } from '@nestjs/common';
import { TipoPagoService } from './tipo-pago.service';
import { TipoPagoController } from './tipo-pago.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoPago } from './entities/tipo-pago.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoPago])],
  controllers: [TipoPagoController],
  providers: [TipoPagoService],
})
export class TipoPagoModule {}
