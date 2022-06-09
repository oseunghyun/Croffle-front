// node {
// 	def app
// 	stage('Clone repository') {
// 		git 'https://github.com/ProjectDevelopment3/Croffle-front.git'
// 	}
// 	stage('Build image') {
// 		app = docker.build("osh1477/test")
// 	}
// 	stage('Test image'){
// 		app.inside {
//                        sh 'ls;rm -rf /var/www/croffle/dist;dir /var/jenkins_home/workspace;node --version;npm install;npm run build;mv dist /var/www/croffle'  }
//         }
//          stage('Push image') {
//         	docker.withRegistry('https://registry.hub.docker.com', 'osh1477'){ 
// 			app.push("${env.BUILD_NUMBER}")
//                 	app.push("latest")
//                 }
//         }       
// }

pipeline {
    agent any
    tools {
      nodejs 'node 16.14.0'
    }
    stages {
        stage('Clone repository') {
	      steps {	      
		      git 'https://github.com/ProjectDevelopment3/Croffle-front.git'
		      }
	 }
	stage('Test image') {
		steps {
			app {
				inside {
			      		sh "pwd" 
			      		sh "rm -rf /var/www/croffle/dist"
			      		dir ("/var/jenkins_home/workspace") {   
		 			sh "npm install"
					sh "ls -al" 
						sh "scp -r dist ohsh1477@34.64.45.86:/var/www/Croffle"
					}
				}
			}
		}
	}
//         stage('Push image') {
// 		steps {
// 			docker {
// 				withRegistry('https://registry.hub.docker.com', 'osh1477'){ 
// 					app {
// 						push("${env.BUILD_NUMBER}")
// 					}
// 					app {
// 						push("latest")
// 					}	
				
// 			    }
// 		       }
// 		    }
// 		}
	    }
	}
                                         
