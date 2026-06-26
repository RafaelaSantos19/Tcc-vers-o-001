import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';
export class CreateSacDto { @IsString() @IsNotEmpty() type:string; @IsString() @IsNotEmpty() subject:string; @IsEmail() @IsOptional() email?:string; @IsString() @IsNotEmpty() message:string; }
