import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateRideDto } from './dto/create-ride.dto';
import { UpdateRideDto } from './dto/update-ride.dto';
import { RidesService } from './rides.service';
@Controller('rides')
export class RidesController { constructor(private service:RidesService){} @Post() create(@Body() dto:CreateRideDto){return this.service.create(dto);} @Get() findAll(){return this.service.findAll();} @Get(':id') findOne(@Param('id') id:string){return this.service.findOne(Number(id));} @Patch(':id') update(@Param('id') id:string,@Body() dto:UpdateRideDto){return this.service.update(Number(id),dto);} @Delete(':id') remove(@Param('id') id:string){return this.service.remove(Number(id));} }
