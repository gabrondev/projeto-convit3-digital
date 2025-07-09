# ✉️ Convit3 Digital

<div align="center">
<img src="https://github.com/gabrondev/projeto-convit3-digital/raw/main/.gitassets/capa.png" width="350" />

<div data-badges>
    <img src="https://img.shields.io/github/stars/gabrondev/projeto-convit3-digital?style=for-the-badge" alt="GitHub stars" />
    <img src="https://img.shields.io/github/forks/gabrondev/projeto-convit3-digital?style=for-the-badge" alt="GitHub forks" />
    <img src="https://img.shields.io/github/issues/gabrondev/projeto-convit3-digital?style=for-the-badge" alt="GitHub issues" />
</div>

<div data-badges>
    <img src="https://img.shields.io/badge/next.js-%23000000.svg?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
    <img src="https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white" alt="NestJS" />
    <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/prisma-%232D3748.svg?style=for-the-badge&logo=prisma&logoColor=white" alt="Prisma" />
    <img src="https://img.shields.io/badge/postgresql-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white" alt="PostgreSQL" />
   <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" />
   <img src="https://img.shields.io/badge/turborepo-%23000000.svg?style=for-the-badge&logo=turborepo&logoColor=white" alt="Turborepo" />
   <img src="https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white" alt="Yarn" />
   <img src="https://img.shields.io/badge/jwt-%23000000.svg?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white" alt="JWT" />
</div>
</div>

Convit3 Digital é uma plataforma inovadora projetada para simplificar e modernizar a gestão de convites digitais. Com uma interface completa e intuitiva, a aplicação permite que os usuários criem, personalizem e enviem convites para qualquer tipo de evento de maneira rápida e eficiente, proporcionando uma experiência prática e profissional.

A plataforma vai além, permitindo que os organizadores acompanhem, em tempo real, as confirmações de presença (RSVP), o que garante um controle detalhado e eficiente do planejamento do evento. Com a aplicação Convit3 Digital, você tem à disposição uma solução completa para gerenciar seus eventos de forma moderna, organizada e sem complicações, transformando a experiência de convidar em algo prático e inesquecível.

## 🖥️ Como rodar este projeto 🖥️

### Requisitos:

- Node.js instalado
- PostgreSQL configurado

### Execução:

1. Clone este repositório:

   ```sh
   git clone https://github.com/gabrondev/projeto-convit3-digital
   ```

2. Acesse o diretório do projeto:

   ```sh
   cd convit3-digital
   ```

3. Instale as dependências com o comando a seguir na pasta raiz do projeto:

   ```sh
   yarn install
   ```

4. Configure as variáveis de ambiente:

   Será necessário criar um arquivo `.env` com as mesmas variáveis de ambiente listadas no arquivo `.env.example` nas pastas `apps/frontend` e `apps/backend`. Cada um desses arquivos deverá ser preenchido com as variáveis de ambiente correspondentes e exemplificadas no arquivo `.env.example` de cada pasta.

5. Execute as migrações do banco rodando o comando a seguir na pasta prisma que se localiza dentro da pasta `app/backend`:

   ```sh
   npx prisma migrate dev
   ```

6. Inicie a aplicação rodando o comando `yarn dev` na pasta raiz da sua aplicação. Esse comando iniciará todos os projetos da sua aplicação.

7. Acesse o projeto em [http://localhost:3000](http://localhost:3000).

## 🗒️ Features do projeto 🗒️

- Autenticação com JWT
- Criação e personalização de convites digitais
- Gerenciamento de listas de convidados
- Acompanhamento de confirmações de presença (RSVP)
- Dashboard de eventos

![](https://github.com/gabrondev/projeto-convit3-digital/raw/main/.gitassets/2.jpg)

![](https://github.com/gabrondev/projeto-convit3-digital/raw/main/.gitassets/3.jpg)

![](https://github.com/gabrondev/projeto-convit3-digital/raw/main/.gitassets/4.jpg)

## 💎 Links úteis 💎

- [Next.js](https://nextjs.org/docs)
- [NestJS](https://docs.nestjs.com/)
- [Prisma](https://www.prisma.io/docs)
- [PostgreSQL](https://www.postgresql.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)