# bun-auth

Este projeto é uma API de autenticação desenvolvida com Bun, Docker, PostgreSQL, Better Auth, e drizzle.

## Tecnologias Utilizadas
- Bun
- Elysia
- Docker
- PostgreSQL
- Drizzle
- Better Auth
- TypeScript

## Scripts Úteis
- `db:generate`: Gera configurações do banco de dados
- `db:migrate`: Executa migrações no banco
- `dev`: Inicia o servidor de desenvolvimento

## Como Usar
1. Clone este repositório
2. `bun install`
3. Configure o arquivo `.env`
4. Inicie o banco de dados com Docker: `docker-compose up -d`
5. Rode as migrações: `bun run db:migrate`
6. Inicie o servidor de desenvolvimento: `bun run dev`

## Estrutura
- `src/`: Código fonte
- `docker-compose.yml`: Configuração do Docker
- `drizzle.config.ts`: Configuração do drizzle ORM
- `index.ts`: Ponto de entrada

## Licença
Este projeto está sob licença MIT.