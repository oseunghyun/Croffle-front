node {
	def app
	stage('Clone repository') {
		git 'https://github.com/ProjectDevelopment3/Croffle-front.git'
	}
	stage('Build image') {
		app = docker.build("osh1477/test")
	}
	stage('Test image'){
		app.inside {
                       sh 'sudo rm -rf /var/www/croffle/dist;cd /home/ohsh1477/jenkins/Croffle-front;sudo npm install;sudo npm run build;sudo mv dist /var/www/croffle;'
                        }
        }
         stage('Push image') {
        	docker.withRegistry('https://registry.hub.docker.com', 'osh1477'){ 
			app.push("${env.BUILD_NUMBER}")
                	app.push("latest")
                }
        }       
}
                                         
