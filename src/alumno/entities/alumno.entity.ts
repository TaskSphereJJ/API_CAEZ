import { Encargado } from "src/encargado/entities/encargado.entity";
import { Enfermedad } from "src/enfermedad/entities/enfermedad.entity";
import { Padrino } from "src/padrino/entities/padrino.entity";
import { Role } from "src/roles/entities/role.entity";
import { Sexo } from "src/sexo/entities/sexo.entity";
import { Turno } from "src/turno/entities/turno.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity('alumno')
export class Alumno {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lastName: string;

    @Column()
    registrationDate: Date;

    @Column()
    documentNumber: number; 

    @Column({ default: false })
    esBecado: boolean;

    @ManyToOne(() => Sexo)
    sexoId: Sexo;

    @ManyToOne(() => Role)
    roleId: Role;

    @ManyToOne(() => Encargado)
    encargadoId: Encargado;

    @ManyToOne(() => Enfermedad)
    enfermedadId: Enfermedad;

    // @ManyToOne(() => TipoDocumento)
    // tipoDocumentoId: TipoDocumento;

    @ManyToOne(() => Turno)
    turnoId: Turno;

    @ManyToOne(() => User)
    administradorId: User;

    @ManyToOne(() => Padrino)
    padrinoId: Padrino;

    @Column({ default: true })
    isActive: boolean;
}
