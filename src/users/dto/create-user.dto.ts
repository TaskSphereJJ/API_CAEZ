import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateUserDto {

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
    roleId: number;

}
