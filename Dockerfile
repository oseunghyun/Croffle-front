FROM ubuntu:20.04
RUN apt-get update && apt-get -y install build-essential && mkdir -p app
COPY . /app/
WORKDIR /app/
RUN rm -rf /var/www/croffle/dist \
cd /var/jenkins_home/workspace \
mv dist /var/www/croffle/

