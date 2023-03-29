# Notas e Lembretes

Aplicativo criado para armazenar seus lembretes.

## Instalação

Primeiramente, na pasta backend do projeto, iremos instalar as dependencias e iniciar o servidor.

Para instalar as dependencias:

```bash
  npm install
```
Para iniciar o servidor:

```bash
  npm run dev
```

Criando o container no Docker:

```bash
  docker run --name lembretes_app -e MYSQL_ROOT_PASSWORD=root -p 3308:3308 -d mysql:8.0
```

Iniciando o container no Docker:
