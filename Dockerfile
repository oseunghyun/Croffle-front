FROM ubuntu:20.04
RUN apt-get update && apt-get -y install build-essential && mkdir -p app
COPY . /app/
WORKDIR /app/
CMD rm -rf /var/www/croffle/dist \
cd /var/jenkins_home/workspace/docker-pipline_master/Croffle-front \
npm install \
npm run build \
mv dist /var/www/croffle/

