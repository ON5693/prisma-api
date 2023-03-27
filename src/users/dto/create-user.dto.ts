import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";
import { IsBoolean } from "class-validator";
import { IsNotEmpty } from "class-validator";

export class CreateUserDto {

  @ApiProperty({description: 'Email do usuário'})
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({description: 'Nome completo do usuário'})
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({description: 'Define se o usuário é administrador', default: false})
  @IsBoolean()
  admin: boolean;
}
