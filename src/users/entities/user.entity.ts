import { Role } from "src/roles/entities/role.entity";
import { BeforeInsert, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
// Necesario para encriptar la contraseña
import * as bcrypt from 'bcrypt';

@Entity('users')
export class User {
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

    @ManyToOne(() => Role)
    roleId: Role;

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
