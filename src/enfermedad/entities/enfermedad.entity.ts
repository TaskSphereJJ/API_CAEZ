import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('enfermedad')
export class Enfermedad {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    descripcion: string;

    @Column({ default: true})
    isActive: boolean;
}
