import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateEncargadoDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    @IsDate()
    registrationDate: Date;

    @IsNotEmpty()
    @IsNumber()
    phone: number;

    @IsNotEmpty()
    @IsNumber()
    emergencyPhone: number;

    @IsNotEmpty()
    @IsNumber()
    documentNumber: number;

    @IsNotEmpty()
    @IsNumber()
    roleId: number;
    
    @IsNotEmpty()
    @IsNumber()
    sexoId: number;

    @IsNotEmpty()
    @IsNumber()
    direccionId: number;

    // @IsNotEmpty()
    // @IsNumber()
    // tipoDocumentoId: number;

    @IsNotEmpty()
    @IsNumber()
    administratorId: number;
}
