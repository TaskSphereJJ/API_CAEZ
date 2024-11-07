import { IsNotEmpty, IsString } from "class-validator";

export class UpdateTipoPagoDto {
    @IsNotEmpty()
    @IsString()
    name: string;
}
