import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdatePadrinoDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;

    @IsNotEmpty()
    phone: number;

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsDate()
    registrationDate: Date; 

    @IsNotEmpty()
    @IsNumber()
    roleId: number;

    @IsNotEmpty()
    @IsNumber()
    sexoId: number;

    @IsNotEmpty()
    @IsNumber()
    direccionId: number;

    @IsNotEmpty()
    @IsNumber()
    administradorId: number;
}
