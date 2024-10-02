import { Direccion } from "src/direccion/entities/direccion.entity";
import { Role } from "src/roles/entities/role.entity";
import { Sexo } from "src/sexo/entities/sexo.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('padrino')
export class Padrino {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lastName: string;

    @Column()
    phone: number;

    @Column()
    email: string;

    @Column()
    registrationDate: Date;

    @ManyToOne(() => Role)
    role: Role;

    @ManyToOne(() => Sexo)
    sexo: Sexo;

    @ManyToOne(() => Direccion)
    direccion: Direccion;

    @ManyToOne(() => User)
    administrador: User;

}
