import { PartialType } from '@nestjs/mapped-types';
import { CreateParentezcoDto } from './create-parentezco.dto';

export class UpdateParentezcoDto extends PartialType(CreateParentezcoDto) {}
