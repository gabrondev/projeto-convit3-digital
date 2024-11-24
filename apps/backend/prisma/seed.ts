import { PrismaClient } from '@prisma/client';
import { eventos } from 'core';

async function seed() {
  const prisma = new PrismaClient();

  const transacoes = eventos.map(async (evento) => {
    await prisma.evento.create({
      data: {
        id: evento.id,
        alias: evento.alias,
        senha: evento.senha,
        nome: evento.nome,
        data: evento.data,
        local: evento.local,
        descricao: evento.descricao,
        imagem: evento.imagem,
        imagemBackground: evento.imagemBackground,
        publicoEsperado: evento.publicoEsperado,
        convidados: {
          create: evento.convidados.map((convidado) => ({
            id: convidado.id,
            nome: convidado.nome,
            email: convidado.email,
            confirmado: convidado.confirmado,
            possuiAcompanhantes: convidado.possuiAcompanhantes,
            qtdeAcompanhantes: convidado.qtdeAcompanhantes,
          })),
        },
      },
    });
  });

  await Promise.all(transacoes);
}

seed();
