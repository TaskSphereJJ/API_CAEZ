import { Mes } from "src/mes/entities/me.entity";
import { Pago } from "src/pago/entities/pago.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('pagoMes')
export class PagoMe {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Pago)
    pagoId: Pago;

    @ManyToOne(() => Mes)
    mesId: Mes;

    @Column({default: true})
    isActive: boolean;
}
