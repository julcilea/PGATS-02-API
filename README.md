# API de Transferências

API Restful para login, registro, consulta de usuários e transferências, com regras de negócio básicas e documentação Swagger.

## Instalação

1. Clone o repositório:
   ```bash
   git clone <repo-url>
   cd pgast-02-api
   ```
2. Instale as dependências:
   ```bash
   npm install express swagger-ui-express
   ```

## Executando a API

- Para rodar o servidor:
  ```bash
  node server.js
  ```
- Acesse a documentação Swagger em: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## Endpoints

- `POST /api/users/register` — Registro de usuário
- `POST /api/users/login` — Login de usuário
- `GET /api/users` — Listar usuários
- `POST /api/transfers` — Transferência de valores

## Regras de Negócio

- Login exige usuário e senha.
- Não é possível registrar usuários duplicados.
- Transferências para não favorecidos só são permitidas se o valor for menor que R$ 5.000,00.
- Banco de dados em memória (os dados são perdidos ao reiniciar o servidor).

## Estrutura de Diretórios

- `controller/` — Rotas e controllers
- `service/` — Lógica de negócio
- `repository/` — Persistência em memória
- `app.js` — Configuração do Express
- `server.js` — Inicialização do servidor

## Testes

A API foi estruturada para facilitar testes automatizados com Supertest, importando o `app.js` sem iniciar o servidor.
