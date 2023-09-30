# bex-hackaton

Como iniciar - comandos

cd api/

yarn install // instala as dependencias

yarn dev // executa


CURL criação de dossie


curl --location 'localhost:8080/dossie' \

--header 'Content-Type: application/json' \

--data '{

    "contratante": 2,

    "fornecedor": 3,

    "colaboradores": [

    1,

    2

    ],

    "documentos": [

    1,

    3

    ],

    "dataInicial": "2023-01-01",

    "dataFinal": "2021-01-01",

    "sistema": "V1"

}'
