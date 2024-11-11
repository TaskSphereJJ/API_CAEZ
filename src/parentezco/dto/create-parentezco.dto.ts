import { IsNotEmpty, IsString } from "class-validator";

export class CreateParentezcoDto {
    @IsNotEmpty()
    @IsString()
    name: string; 
}
