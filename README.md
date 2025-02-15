# API Node.js com TypeScript e framework Express - Champions League API

## Projeto desenvolvido beseado no módulo criando APIs com Node.js do curso Node Fundamentals da DIO

### Tecnologias

<br>

  <img src="https://cdn.simpleicons.org/nodedotjs/339933" height="40" alt="nodejs logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="40" alt="typescript logo"  />
  <img width="12" />
  <img src="https://skillicons.dev/icons?i=express" height="40" alt="express logo"  />
  
  <br>

  - **Node.js**: Ambiente de execução JavaScript no lado do servidor
  - **TypeScript**: Linguagem de programação que adiciona tipagem estática ao JavaScript 
  - **Express**: Framework para Node.js que facilita a criação de servidores HTTP

### Descrição do projeto

A Champions League API é um aplicação que realiza um CRUD simples em um arquivo json de modo que podemos listar todos os jogadores e clubes, cadastrá-los, atualizar suas estatísticas e deletá-los.

O projeto foi desenvolvido com **Express** para acelerar a criação da API com seus recursos e também como forma de aplicar meus conhecimentos desse framework. Também foi aplicado ao projeto o **CORS** para controle de quem podem chamar a API.

Diferente do projeto aplicado em aula foi utilizado o conceito de **classes** e **POO** para implementação do controller, service e repository. Além disso, os dados estão armazenados nos arquivos ```json``` e toda a manipulação ocorre sobre esses arquivos.

Outro ponto é que para as diferentes funções dos endpoints foram criados arquivos separados para facilitar a manuntenção do código posteriormente.


### Funcionalidades

- Listar os jogadores e clubes
- Cadastrar novos jogadores e clubes
- Atualizatar as estatísticas dos jogadores

**Observação:** Ainda estou trabalhando na função de deletar jogadores e clubes.

## Endpoints

- Listar jogadores: ```GET/api/players```
- Listar jogador por id: ```GET/api/players/:id```
- Cadastrar jogador: ```POST/api/players```
- Listar clubes: ```GET/api/clubs```
- Cadastrar clubes: ```POST/api/clubs```

### Estrutura de pastas

```shell
└───src               # Código-fonte principal da aplicação
    ├───controllers   # Funções de controle das rotas
    ├───database      # Banco de dados da aplicação
    ├───models        # Modelos de contrato para jogadores, clubes e respostas HTTP por meio de interfaces
    ├───repositories  # Funções de manipulação do banco de dados da aplicação
    ├───services      # Funções de tratamento das requisições das rotas
    └───utils         # Funções para respostas padrões HTTP
```

## Como executar

Você precisa ter instalado o Node.js em sua máquina. Versão utilizada: ```v.20.16.0```

1. Clone este repositório
2. Instale as dependências usando ```npm instal```
3. Inicie o servidor usando o comando ```npm start:dev```
4. Acesse os endpoints fornecidos





