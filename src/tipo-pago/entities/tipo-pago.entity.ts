import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tipoPago')
export class TipoPago {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ default: true})
    isActive: boolean;
}
