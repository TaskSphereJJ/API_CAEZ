import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('sexo')
export class Sexo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ default: true})
    isActive: boolean;
}
