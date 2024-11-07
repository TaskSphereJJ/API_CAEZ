import { IsNotEmpty, IsString } from "class-validator";

export class UpdateTurnoDto {
    @IsNotEmpty()
    @IsString()
    name: string;
}
