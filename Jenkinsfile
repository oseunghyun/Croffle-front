              app.inside {
                        sh 'sudo rm -rf /var/www/croffle/dist; 
                        cd /home/ohsh1477/jenkins/Croffle-front;
                        sudo npm install;
                        sudo npm run build;
                        sudo mv dist /var/www/croffle;'
                        }
                }
                stage('Push image') {
                        docker.withRegistry('https://registry.hub.docker.com', 'osh1477'){
		 app.push("${env.BUILD_NUMBER}")
                app.push("latest")
                }
        }       
}
                                         
