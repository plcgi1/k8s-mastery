FROM nginx

COPY sa-nodejs-webapp.conf /etc/nginx/conf.d

COPY build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf