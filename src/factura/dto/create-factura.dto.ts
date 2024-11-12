import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateFacturaDto {
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
