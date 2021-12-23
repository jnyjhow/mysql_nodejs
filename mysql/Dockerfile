FROM mysql:5.7

#criando senha do root
ENV MYSQL_ROOT_PASSWORD=root

#copiando arquivo init.sql
COPY ./init.sql /docker-entrypoint-initdb.d/