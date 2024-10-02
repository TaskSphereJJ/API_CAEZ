import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('tipoDocumento')
export class TipoDoc {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({ default: true})
    isActive: boolean;
}

