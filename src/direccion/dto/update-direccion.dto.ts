import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateDireccionDto {
    @IsNotEmpty()
    @IsString()
    name: string; 
}
