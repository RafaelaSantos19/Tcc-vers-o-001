import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSacDto } from './dto/create-sac.dto';
@Injectable()
export class SacService { constructor(private prisma:PrismaService){} create(data:CreateSacDto){return this.prisma.sacRequest.create({data});} findAll(){return this.prisma.sacRequest.findMany({orderBy:{id:'asc'}});} async findOne(id:number){const item=await this.prisma.sacRequest.findUnique({where:{id}}); if(!item) throw new NotFoundException('Solicitação não encontrada.'); return item;} async remove(id:number){await this.findOne(id); await this.prisma.sacRequest.delete({where:{id}}); return {message:'Solicitação removida com sucesso.'};} }
