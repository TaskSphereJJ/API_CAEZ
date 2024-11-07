import { IsNotEmpty, IsString } from "class-validator";

export class UpdateTipoDocDto {
    @IsNotEmpty()
    @IsString()
    name: string;
}
