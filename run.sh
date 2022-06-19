echo "\ndaemon off;" >> /etc/nginx/nginx.conf;

mkdir -p /var/www/croffle/dist/ ;
mv dist /var/www/croffle/;


service nginx restart;
