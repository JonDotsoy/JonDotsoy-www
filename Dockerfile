FROM httpd:2.4.25-alpine

COPY dest/index.html /usr/local/apache2/htdocs/index.html
COPY dest/styles /usr/local/apache2/htdocs/styles
