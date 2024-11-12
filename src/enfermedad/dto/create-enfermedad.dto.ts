import { IsNotEmpty, IsString } from "class-validator";

export class CreateEnfermedadDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    descripcion: string; 

}