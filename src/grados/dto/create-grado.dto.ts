import { IsNotEmpty, IsString } from "class-validator";

export class CreateGradoDto {
    @IsNotEmpty()
    @IsString()
    name: string;
}
