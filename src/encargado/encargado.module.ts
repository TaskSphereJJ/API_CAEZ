import { Module } from '@nestjs/common';
import { EncargadoService } from './encargado.service';
import { EncargadoController } from './encargado.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Encargado } from './entities/encargado.entity';
import { Role } from 'src/roles/entities/role.entity';
import { Direccion } from 'src/direccion/entities/direccion.entity';
import { Sexo } from 'src/sexo/entities/sexo.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Encargado, Role, Direccion, Sexo, User])],
  controllers: [EncargadoController],
  providers: [EncargadoService],
})
export class EncargadoModule {}
