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
                                vim \
                                npm
RUN rm -rf /app/ && rm -rf /var/www/croffle/dist
COPY . /app/
WORKDIR /app/
# RUN echo "\ndaemon off;" >> /etc/nginx/nginx.conf; mkdir -p /var/www/croffle/dist/; mv dist /var/www/croffle/

COPY default.conf /etc/nginx/sites-enabled/default
COPY ./run.sh /tmp/

WORKDIR /tmp
EXPOSE 80
CMD bash run.sh
# RUN service nginx start 
