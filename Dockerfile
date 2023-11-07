# Verwende das offizielle PHP-8.2.10-Apache-Image als Basis
FROM php:8.2.10-apache

# Port 80 im Container freigeben
EXPOSE 80

# Kopiere den Inhalt des Backend-Verzeichnisses in das Webroot-Verzeichnis des Containers
COPY ./Backend /var/www/html/DHBW-Automobiles/Backend


# Konfiguriere den Apache-Server, um das Webroot-Verzeichnis zu verwenden
RUN sed -i 's!/var/www/html!/var/www/html/!g' /etc/apache2/sites-available/000-default.conf

# Starte den Apache-Server im Vordergrund
CMD ["apache2-foreground"]
