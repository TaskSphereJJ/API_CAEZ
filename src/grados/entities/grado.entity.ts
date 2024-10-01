import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('grados')
export class Grado {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ default: true})
    isActive: boolean;
}
