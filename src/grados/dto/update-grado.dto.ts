import { IsNotEmpty, IsString } from "class-validator";

export class UpdateGradoDto {
    @IsNotEmpty()
    @IsString()
    name: string; 
}
