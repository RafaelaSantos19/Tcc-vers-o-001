import { IsNumber, IsOptional, IsString } from 'class-validator';
export class UpdateRideDto { @IsString() @IsOptional() passengerName?:string; @IsString() @IsOptional() origin?:string; @IsString() @IsOptional() destination?:string; @IsString() @IsOptional() needs?:string; @IsNumber() @IsOptional() price?:number; @IsString() @IsOptional() status?:string; }
