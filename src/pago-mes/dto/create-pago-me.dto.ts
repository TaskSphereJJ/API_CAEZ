import { IsNotEmpty, IsNumber } from "class-validator";

export class CreatePagoMeDto {
@IsNotEmpty()
@IsNumber()
pagoId: number;

@IsNotEmpty()
@IsNumber()
mesId: number;
}
