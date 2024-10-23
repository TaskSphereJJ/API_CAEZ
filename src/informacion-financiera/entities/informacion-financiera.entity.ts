import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('informacionFinanciera')
export class InformacionFinanciera {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    fondoActual: number;

    @Column({type: "decimal"})
    deudaTotal: number;

    @Column({type: "decimal"})
    salgoPorCompletar: number;

    @Column()
    numStudent: number;
}
