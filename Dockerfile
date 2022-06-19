FROM nginx
RUN apt-get update && apt-get -y install build-essential && mkdir -p app
COPY . /app/
WORKDIR /app/
# RUN rm -rf /var/www/croffle/dist
RUN cd /var/jenkins_home/workspace
RUN mv dist /var/www/croffle/
COPY default /etc/nginx/sites-available/default

EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
