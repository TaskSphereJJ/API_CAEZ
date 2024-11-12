import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateFacturaDto {
    @IsNotEmpty()
    @IsNumber()
    pagoId: number;

    @IsNotEmpty()
    @IsNumber()
    alumnoId: number;

    @IsNotEmpty()
    @IsString()
    pdfRoute: string; 
}
