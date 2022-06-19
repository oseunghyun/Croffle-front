echo "\ndaemon off;" >> /etc/nginx/nginx.conf;
npm install -g npm@8.12.2;
cd /app;
npm i;
npm run build;


mkdir -p /var/www/croffle/dist/ ;
mv /app/dist /var/www/croffle/;


service nginx restart;
