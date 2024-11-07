import { IsNotEmpty, IsString } from "class-validator";

export class CreateTurnoDto {
    @IsNotEmpty()
    @IsString()
    name: string;
}
