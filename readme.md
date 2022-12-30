# klubbs para estabelecimentos - Gerencie seu estabelecimento

![](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

![TESTE](https://github.com/klubbs/app-establishment/actions/workflows/ios-production.yml/badge.svg)


## Instalação

```bash
# Instalar pacotes no projeto
yarn install
```


Crie o arquivo `.env` no root do projeto:

```dosini
ENVIRONMENT_KLUBBS_API_URL=
ENVIRONMENT_KLUBBS_AUTHZN_URL=
ENVIRONMENT_PLACES_API=
```


##### Steps para criação de novo ambiente

docker run --name postgresql -e POSTGRES_USER=<DB_USER> -e POSTGRES_PASSWORD= <DB_PASSWORD> -p 5432:5432 -d postgres

Criar esquema `kluboos` dentro do database

Copiar arquivos envs com colegas de equipeos projetos

Rodar migrations do database

equalizar nome do env de DB com envs que se conectam ao banco (API,AUTHZN...)
