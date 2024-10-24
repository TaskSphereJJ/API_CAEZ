import { Module } from '@nestjs/common';
import { PagoService } from './pago.service';
import { PagoController } from './pago.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pago } from './entities/pago.entity';
import { Alumno } from 'src/alumno/entities/alumno.entity';
import { TipoPago } from 'src/tipo-pago/entities/tipo-pago.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pago, Alumno, TipoPago, User])],
  controllers: [PagoController],
  providers: [PagoService],
})
export class PagoModule {}
