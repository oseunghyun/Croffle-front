# FROM nginx
# RUN apt-get update && apt-get -y install build-essential && mkdir -p app
# COPY . /app/
# WORKDIR /app/
# RUN cd /var/jenkins_home/workspace \
# mv dist /var/www/croffle/
# COPY /etc/conf/nginx.conf /etc/nginx/sites-available/default

# # ENTRYPOINT ["nginx", "-g", "daemon off;"]
# RUN service nginx restart 

FROM debian:buster

RUN apt-get update && apt-get -y install \
                                nginx \
                                vim
COPY . /app/
WORKDIR /app/
RUN echo "\ndaemon off;" >> /etc/nginx/nginx.conf 
RUN mkdir -p /var/www/croffle/dist/
RUN mv dist /var/www/croffle/dist/

COPY default.conf /etc/nginx/conf.d/default.conf
COPY ./run.sh /tmp/

WORKDIR /tmp
EXPOSE 80
CMD bash run.sh
