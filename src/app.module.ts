import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';
import { DireccionModule } from './direccion/direccion.module';
import { TurnoModule } from './turno/turno.module';
import { GradosModule } from './grados/grados.module';
import { SexoModule } from './sexo/sexo.module';
import { ParentezcoModule } from './parentezco/parentezco.module';
import { EnfermedadModule } from './enfermedad/enfermedad.module';
import { MesModule } from './mes/mes.module';
import { PadrinoModule } from './padrino/padrino.module';
import { EncargadoModule } from './encargado/encargado.module';
import { AlumnoModule } from './alumno/alumno.module';
import { AlumnoGradoModule } from './alumno-grado/alumno-grado.module';
import { PagoModule } from './pago/pago.module';
import { PagoMesModule } from './pago-mes/pago-mes.module';
import { FacturaModule } from './factura/factura.module';
import { InformacionFinancieraModule } from './informacion-financiera/informacion-financiera.module';
import { TipoDocModule } from './tipo-doc/tipo-doc.module';
import { TipoPagoModule } from './tipo-pago/tipo-pago.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      logging: true,
      synchronize: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    RolesModule,
    UsersModule,
    DireccionModule,
    TurnoModule,
    GradosModule,
    SexoModule,
    ParentezcoModule,
    EnfermedadModule,
    MesModule,
    PadrinoModule,
    EncargadoModule,
    AlumnoModule,
    AlumnoGradoModule,
    PagoModule,
    PagoMesModule,
    FacturaModule,
    InformacionFinancieraModule,
    TipoDocModule,
    TipoPagoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
