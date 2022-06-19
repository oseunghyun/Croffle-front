FROM nginx
RUN apt-get update && apt-get -y install build-essential && mkdir -p app
COPY . /app/
WORKDIR /app/
RUN rm -rf /var/www/croffle/dist \
cd /var/jenkins_home/workspace \
mv dist /var/www/croffle/
COPY /etc/conf/nginx.conf /etc/nginx/sites-available/default

ENTRYPOINT ["nginx", "-g", "daemon off;"]
