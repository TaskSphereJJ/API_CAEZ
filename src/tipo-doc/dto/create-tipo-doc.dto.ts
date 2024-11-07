import { IsNotEmpty, IsString } from "class-validator";

export class CreateTipoDocDto {
    @IsNotEmpty()
    @IsString()
    name: string;
}
