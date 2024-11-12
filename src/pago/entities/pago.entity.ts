import { Alumno } from "src/alumno/entities/alumno.entity";
import { TipoPago } from "src/tipo-pago/entities/tipo-pago.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('pago')
export class Pago {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Alumno)
    alumnoId: Alumno;

    @Column()
    multa: number;

    @ManyToOne(() => TipoPago)
    tipoPagoId: TipoPago;

    @Column()
    discount: number;

    @Column()
    price: number;

    @Column()
    totalPagado: number;

    @Column({type: 'date'})
    registrationDate: Date; 

    @ManyToOne(() => User)
    adminId: User;

    @Column()
    description: string;

    @Column({default: true})
    isActive: boolean;


}
