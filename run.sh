echo "\ndaemon off;" >> /etc/nginx/nginx.conf;

cd /app;
npm i;
npm run build;


mkdir -p /var/www/croffle/dist/ ;
mv /app/dist /var/www/croffle/;


service nginx restart;
