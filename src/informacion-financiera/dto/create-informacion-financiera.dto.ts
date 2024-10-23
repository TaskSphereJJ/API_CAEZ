import { IsDecimal, IsNotEmpty, IsNumber } from "class-validator";

export class CreateInformacionFinancieraDto {
    @IsNotEmpty()
    @IsNumber()
    fondoActual: number;

    @IsNotEmpty()
    @IsDecimal()
    deudaTotal: number;

    @IsNotEmpty()
    @IsDecimal()
    salgoPorCompletar: number;

    @IsNotEmpty()
    @IsNumber()
    numStudent: number;
}
