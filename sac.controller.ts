import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateSacDto } from './dto/create-sac.dto';
import { SacService } from './sac.service';
@Controller('sac')
export class SacController { constructor(private service:SacService){} @Post() create(@Body() dto:CreateSacDto){return this.service.create(dto);} @Get() findAll(){return this.service.findAll();} @Get(':id') findOne(@Param('id') id:string){return this.service.findOne(Number(id));} @Delete(':id') remove(@Param('id') id:string){return this.service.remove(Number(id));} }
