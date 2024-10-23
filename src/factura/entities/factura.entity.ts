import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('factura')
export class Factura {
    @PrimaryGeneratedColumn()
    Id: number;

    @Column()
    pagoId: number;

    @Column()
    alumnoId: number;

    @Column()
    pdfRoute: string;
}
