import { IsNotEmpty, IsString } from "class-validator";

export class UpdateEnfermedadDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    descripcion: string; 
}
