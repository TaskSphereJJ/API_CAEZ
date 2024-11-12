import { IsNotEmpty, IsString } from "class-validator";

export class UpdateMeDto {
    @IsNotEmpty()
    @IsString()
    name: string; 
}
