import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRideDto } from './dto/create-ride.dto';
import { UpdateRideDto } from './dto/update-ride.dto';
@Injectable()
export class RidesService { constructor(private prisma:PrismaService){} create(data:CreateRideDto){ return this.prisma.ride.create({data:{...data, price:data.price ?? 0}}); } findAll(){return this.prisma.ride.findMany({orderBy:{id:'asc'}});} async findOne(id:number){const ride=await this.prisma.ride.findUnique({where:{id}}); if(!ride) throw new NotFoundException('Corrida não encontrada.'); return ride;} async update(id:number,data:UpdateRideDto){await this.findOne(id); return this.prisma.ride.update({where:{id},data});} async remove(id:number){await this.findOne(id); await this.prisma.ride.delete({where:{id}}); return {message:'Corrida removida com sucesso.'};} }
