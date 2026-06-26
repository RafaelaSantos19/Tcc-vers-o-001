import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
export class CreateRideDto { @IsString() @IsOptional() passengerName?:string; @IsString() @IsNotEmpty() origin:string; @IsString() @IsNotEmpty() destination:string; @IsString() @IsOptional() needs?:string; @IsNumber() @IsOptional() price?:number; @IsNumber() @IsOptional() userId?:number; }
