import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('direccion')
export class Direccion {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string; 

    @Column({ default: true})
    isActive: boolean;
}
