import { IsNotEmpty, IsString } from "class-validator";

export class UpdateRoleDto {
    @IsNotEmpty()
    @IsString()
    name: string; 
}
