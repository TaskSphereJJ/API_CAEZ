import { PartialType } from '@nestjs/mapped-types';
import { CreateAlumnoGradoDto } from './create-alumno-grado.dto';

export class UpdateAlumnoGradoDto extends PartialType(CreateAlumnoGradoDto) {}
