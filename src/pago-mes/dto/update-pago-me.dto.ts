import { IsNotEmpty, IsNumber } from "class-validator";

export class UpdatePagoMeDto {
    @IsNotEmpty()
    @IsNumber()
    pagoId: number;

    @IsNotEmpty()
    @IsNumber()
    mesId: number;
}
