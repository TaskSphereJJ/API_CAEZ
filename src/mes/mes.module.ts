import { Module } from '@nestjs/common';
import { MesService } from './mes.service';
import { MesController } from './mes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mes } from './entities/me.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Mes])],
  controllers: [MesController],
  providers: [MesService],
})
export class MesModule {}
