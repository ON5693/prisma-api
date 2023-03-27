//Quando não utilizar o swagger
// import { PartialType } from '@nestjs/mapped-types';

//Quando utilizar o swagger
import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
