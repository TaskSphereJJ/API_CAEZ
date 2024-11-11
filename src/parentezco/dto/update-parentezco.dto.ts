import { IsNotEmpty, IsString } from "class-validator";

export class UpdateParentezcoDto {
    @IsNotEmpty()
    @IsString()
    name: string; 
}
