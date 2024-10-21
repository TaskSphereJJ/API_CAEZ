import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAlumnoDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;

    @IsNotEmpty()
    @IsDate()
    registrationDate: Date;

    @IsNotEmpty()
    @IsNumber()
    documentNumber: number; 

    @IsNotEmpty()
    @IsBoolean()
    esBecado: boolean;

    @IsNotEmpty()
    @IsNumber()
    sexoId: number;

    @IsNotEmpty()
    @IsNumber()
    roleId: number;

    @IsNotEmpty()
    @IsNumber()
    encargadoId: number;

    @IsNotEmpty()
    @IsNumber()
    enfermedadId: number;

    @IsNotEmpty()
    @IsNumber()
    turnoId: number;

    @IsNotEmpty()
    @IsNumber()
    administradorId: number;

    @IsNotEmpty()
    @IsNumber()
    padrinoId: number;
}
