import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('turno')
export class Turno {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ default: true })
    isActive: boolean;
}
