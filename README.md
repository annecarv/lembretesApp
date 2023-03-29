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

Iniciando o container no Docker:

```bash
  docker run --hostname=mysql_knex --env=MYSQL_ROOT_PASSWORD=senha --env=MYSQL_DATABASE=base_de_dados --env=MYSQL_USER=usuario --env=MYSQL_PASSWORD=senha --env=TZ=America/Sao_Paulo --env=PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin --env=GOSU_VERSION=1.16 --env=MYSQL_MAJOR=8.0 --env=MYSQL_VERSION=8.0.32-1.el8 --env=MYSQL_SHELL_VERSION=8.0.32-1.el8 --volume=C:\Users\anne_\OneDrive\Área de Trabalho\MySQL\api\app:/app:rw --volume=/var/lib/mysql --network=mysql_default -p 3306:3306 --restart=always --label='com.docker.compose.config-hash=d04dbb2cd753a89983ddd49f5f4993f693655d6a3dd0b92ad62467612debfe51' --label='com.docker.compose.container-number=1' --label='com.docker.compose.depends_on=' --label='com.docker.compose.image=sha256:57da161f45ac3835bc872dcb50f0cde87f65661ba8f50a5a0835dee7e262703f' --label='com.docker.compose.oneoff=False' --label='com.docker.compose.project=mysql' --label='com.docker.compose.project.config_files=C:\Users\anne_\OneDrive\Área de Trabalho\MySQL\docker-compose.yml' --label='com.docker.compose.project.working_dir=C:\Users\anne_\OneDrive\Área de Trabalho\MySQL' --label='com.docker.compose.service=mysql_knex' --label='com.docker.compose.version=2.15.1' --runtime=runc -d mysql
```
