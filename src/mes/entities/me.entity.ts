import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('mes')
export class Mes {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ default: true})
    isActive: boolean;
}
