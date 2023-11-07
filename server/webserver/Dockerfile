FROM php:8.2.10-apache

RUN apt-get update
RUN docker-php-ext-install mysqli pdo_mysql

RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf