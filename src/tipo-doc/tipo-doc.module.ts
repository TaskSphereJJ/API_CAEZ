import { Module } from '@nestjs/common';
import { TipoDocService } from './tipo-doc.service';
import { TipoDocController } from './tipo-doc.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoDoc } from './entities/tipo-doc.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoDoc])],
  controllers: [TipoDocController],
  providers: [TipoDocService],
})
export class TipoDocModule {}
