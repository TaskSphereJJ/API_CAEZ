import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('parentezco')
export class Parentezco {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ default: true})
    isActive: boolean;
}
