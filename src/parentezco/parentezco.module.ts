import { Module } from '@nestjs/common';
import { ParentezcoService } from './parentezco.service';
import { ParentezcoController } from './parentezco.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parentezco } from './entities/parentezco.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Parentezco])],
  controllers: [ParentezcoController],
  providers: [ParentezcoService],
}) 
export class ParentezcoModule {}
