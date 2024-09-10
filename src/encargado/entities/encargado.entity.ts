import { Role } from "src/roles/entities/role.entity";
import { Sexo } from "src/sexo/entities/sexo.entity";
import { BeforeInsert, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcrypt';
import { Direccion } from "src/direccion/entities/direccion.entity";
import { TipoDocumento } from "src/tipo-documento/entities/tipo-documento.entity";
import { User } from "src/users/entities/user.entity";

@Entity('encargado')
export class Encargado {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    registrationDate: Date;

    @Column()
    phone: number;

    @Column()
    emergencyPhone: number;

    @Column()
    documentNumber: number;

    @ManyToOne(() => Role)
    roleId: Role;
    
    @ManyToOne(() => Sexo)
    sexoId: Sexo;

    @ManyToOne(() => Direccion) 
    direccionId: Direccion;

    @ManyToOne(() => TipoDocumento)
    tipoDocumentoId: TipoDocumento;

    // usuario con rol tipo Administrador
    @ManyToOne(() => User)
    administratorId: User;

    @Column({ default: true })
    isActive: boolean;


    //TypeORM se ejecuta antes de insertar un nuevo usuario en la base de datos
    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }

    // Método para verificar la contraseña
    async checkPassword(password: string): Promise<boolean> {
        return bcrypt.compare(password, this.password);
    }
}
