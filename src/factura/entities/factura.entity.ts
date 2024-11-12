import { Alumno } from "src/alumno/entities/alumno.entity";
import { Pago } from "src/pago/entities/pago.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('factura')
export class Factura {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Pago)
    pagoId: Pago;

    @ManyToOne(() => Alumno)
    alumnoId: Alumno; 

    @Column()
    pdfRoute: string;
}
