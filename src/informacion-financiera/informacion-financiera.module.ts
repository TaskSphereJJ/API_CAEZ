import { Module } from '@nestjs/common';
import { InformacionFinancieraService } from './informacion-financiera.service';
import { InformacionFinancieraController } from './informacion-financiera.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InformacionFinanciera } from './entities/informacion-financiera.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InformacionFinanciera])],
  controllers: [InformacionFinancieraController],
  providers: [InformacionFinancieraService],
})
export class InformacionFinancieraModule {}
