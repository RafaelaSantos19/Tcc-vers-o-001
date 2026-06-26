# AcessiTransporte — Mobilidade com Inclusão

Projeto de TCC desenvolvido por **Rafaela Santos da Costa**.

O **AcessiTransporte** é um sistema de transporte acessível para pessoas com deficiência ou mobilidade reduzida. O projeto foi atualizado para atender ao escopo mínimo esperado da disciplina de back-end, mantendo o front-end do TCC e adicionando uma API REST com persistência, CRUD, testes e documentação.

## Escopo mínimo atendido

- Projeto versionado no GitHub;
- Organização conforme arquitetura em camadas;
- Persistência de dados com ORM;
- Operações de criação, consulta, atualização e exclusão;
- Testes unitários;
- Testes funcionais/e2e;
- Documentação explicando como rodar o projeto.

## Tecnologias

### Front-end
- HTML5
- CSS3
- JavaScript
- Leaflet.js / OpenStreetMap
- localStorage

### Back-end
- NestJS
- TypeScript
- Prisma ORM
- SQLite
- Jest
- Supertest

## Estrutura

```text
AcessiTransporte-TCC-atualizado/
├── frontend/          # Telas HTML do TCC
├── backend/           # API REST NestJS + Prisma
└── docs/              # Arquivos de apoio
```

## Como rodar o back-end

Entre na pasta do back-end:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
```

Crie o arquivo `.env` usando o exemplo:

```bash
cp .env.example .env
```

Gere o Prisma Client:

```bash
npm run prisma:generate
```

Crie o banco SQLite:

```bash
npm run prisma:migrate
```

Rode a API:

```bash
npm run start:dev
```

A API ficará disponível em:

```text
http://localhost:3000
```

## Como abrir o front-end

Abra o arquivo abaixo no navegador:

```text
frontend/index.html
```

Para as páginas que usam API, mantenha o back-end rodando em `http://localhost:3000`.

## Endpoints principais

### Usuários

| Método | Rota | Descrição |
|---|---|---|
| POST | `/users` | Cria usuário |
| GET | `/users` | Lista usuários |
| GET | `/users/:id` | Busca usuário por ID |
| PATCH | `/users/:id` | Atualiza usuário |
| DELETE | `/users/:id` | Exclui usuário |

### Corridas

| Método | Rota | Descrição |
|---|---|---|
| POST | `/rides` | Cria corrida |
| GET | `/rides` | Lista corridas |
| GET | `/rides/:id` | Busca corrida por ID |
| PATCH | `/rides/:id` | Atualiza corrida |
| DELETE | `/rides/:id` | Exclui corrida |

### SAC

| Método | Rota | Descrição |
|---|---|---|
| POST | `/sac` | Cria solicitação |
| GET | `/sac` | Lista solicitações |
| GET | `/sac/:id` | Busca solicitação por ID |
| DELETE | `/sac/:id` | Exclui solicitação |

## Testes

Rodar testes unitários:

```bash
npm run test
```

Rodar testes funcionais/e2e:

```bash
npm run test:e2e
```

## Arquitetura

O back-end usa arquitetura em camadas:

- **Controller:** recebe as requisições HTTP;
- **Service:** contém as regras e validações;
- **Repository/Prisma:** faz a persistência dos dados;
- **DTOs:** organizam os dados recebidos pela API;
- **Prisma:** mapeia as entidades para o banco SQLite.

## Entidades

- **User:** usuários/passageiros do sistema;
- **Ride:** corridas solicitadas;
- **SacRequest:** mensagens da central de atendimento.

## Repositório

https://github.com/RafaelaSantos19/Tcc
