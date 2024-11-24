import { Body, Controller, Get, HttpException, Param, Post } from '@nestjs/common';
import { complementarConvidado, complementarEvento, Convidado, Data, Evento, eventos, Id } from 'core';
import { EventoPrisma } from './evento.prisma';

@Controller('eventos')
export class EventosController {
    constructor(readonly repo: EventoPrisma){}
    
    @Post()
    async salvarEvento(@Body() evento: Evento){
        const eventoCadastrado = await this.repo.buscarPorAlias(evento.alias);

        if(eventoCadastrado && eventoCadastrado.id !== evento.id){
            throw new HttpException('Já existe um evento com esse alias.', 400)
        }

        const eventoCompleto = complementarEvento(this.deserializar(evento));
        await this.repo.salvar(eventoCompleto);
    }

    @Post(':alias/convidado')
    async salvarConvidado(@Param('alias') alias: string, @Body() convidado: Convidado) {
        const evento = await this.repo.buscarPorAlias(alias);

        if(!evento){
            throw new HttpException('Evento não encontrado.', 400);
        }

        const convidadoCompleto = complementarConvidado(convidado);
        await this.repo.salvarConvidado(evento, convidadoCompleto);
    }

    @Post('acessar')
    async acessarEvento(@Body() dados: {id:string, senha: string}){
        const evento = await this.repo.buscarPorId(dados.id);

        if (!evento){
            throw new HttpException('Evento não encontrado.', 400);
        }

        if(evento.senha !== dados.senha){
            throw new HttpException('Senha não corresponde ao evento.', 400);
        }

        return this.serializar(evento);
    }

    @Get()
    async buscarEventos(){
        const eventos = await this.repo.buscarTodos();
        return eventos.map(this.serializar);
    }

    @Get(':idOuAlias')
    async buscarEvento(@Param('idOuAlias') idOuAlias: string){
        let evento: Evento;
        if(Id.valido(idOuAlias)){
            evento = await this.repo.buscarPorId(idOuAlias, true);
        } else {
            evento = await this.repo.buscarPorAlias(idOuAlias, true);
        }
        return this.serializar(evento);
    }

    @Get('/validar/:alias/:id')
    async validarAlias(@Param('alias') alias: string, @Param('id') id: string){
        const evento = await this.repo.buscarPorAlias(alias);
        return { valido: !evento || evento.id === id }
    }

    private serializar(evento: Evento){
        if (!evento) return null;

        return {
            ...evento,
            data: Data.formatar(evento.data),
        };
    }

    private deserializar(evento: any): Evento{
        if (!evento) return null;
        return {
            ...evento,
            data: Data.desformatar(evento.data),
        }
    }
}