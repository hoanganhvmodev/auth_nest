import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty()
    userName: string;

    @IsNotEmpty()
    passWord: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
}