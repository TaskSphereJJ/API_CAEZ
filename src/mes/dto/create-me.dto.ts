import { IsNotEmpty, IsString } from "class-validator";

export class CreateMesDto {
    @IsNotEmpty()
    @IsString()
    name: string;
}
