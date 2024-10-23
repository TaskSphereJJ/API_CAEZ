import { Module } from '@nestjs/common';
import { FacturaService } from './factura.service';
import { FacturaController } from './factura.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Factura } from './entities/factura.entity';
import { Pago } from 'src/pago/entities/pago.entity';
import { Alumno } from 'src/alumno/entities/alumno.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Factura, Pago, Alumno])],
  controllers: [FacturaController],
  providers: [FacturaService],
})
export class FacturaModule {}
