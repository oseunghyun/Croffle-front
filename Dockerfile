FROM ubuntu:20.04
RUN apt-get update && apt-get -y install build-essential && mkdir -p app
COPY . /app/
WORKDIR /app/
CMD sudo rm -rf /var/www/croffle/dist \
cd /home/ohsh1477/Croffle-front \
sudo npm install \
sudo npm run build \
sudo mv dist /var/www/croffle/

