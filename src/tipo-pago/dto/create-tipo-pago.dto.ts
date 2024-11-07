import { IsNotEmpty, IsString } from "class-validator";

export class CreateTipoPagoDto {
    @IsNotEmpty()
    @IsString()
    name: string;
}
