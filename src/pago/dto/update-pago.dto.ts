import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdatePagoDto {
    @IsNotEmpty()
    @IsNumber()
    alumnoId: number;

    @IsNotEmpty()
    @IsNumber()
    multa: number;

    @IsNotEmpty()
    @IsNumber()
    tipoPagoId: number;

    @IsNotEmpty()
    @IsNumber()
    discount: number; 

    @IsNotEmpty()
    @IsNumber()
    price: number;

    @IsNotEmpty()
    @IsNumber()
    totalPagado: number;

    @IsNotEmpty()
    @IsDate()
    registrationDate: Date;

    @IsNotEmpty()
    @IsNumber()
    adminId: number;

    @IsNotEmpty()
    @IsString()
    description: string;
}
