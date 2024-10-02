import { Module } from '@nestjs/common';
import { InformacionFinancieraService } from './informacion-financiera.service';
import { InformacionFinancieraController } from './informacion-financiera.controller';

@Module({
  controllers: [InformacionFinancieraController],
  providers: [InformacionFinancieraService],
})
export class InformacionFinancieraModule {}
