import { IsNotEmpty, IsString } from "class-validator";

export class UpdateSexoDto {
    @IsNotEmpty()
    @IsString()
    name: string;
}
