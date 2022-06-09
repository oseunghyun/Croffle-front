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
                       sh 'ls'
			sh'rm -rf /var/www/croffle/dist'
			sh 'dir /var/jenkins_home/workspace'
			node 'node --version';
			node 'npm install'
			node 'npm run build'
			sh 'mv dist /var/www/croffle'  
			sh 'scp -r dist ohsh1477@34.64.45.86:/var/www/croffle'
		}

        }
         stage('Push image') {
        	docker.withRegistry('https://registry.hub.docker.com', 'osh1477'){ 
			app.push("${env.BUILD_NUMBER}")
                	app.push("latest")
                }
        }       
// }

// pipeline {
//     agent any
//     tools {
//       nodejs 'node 16.14.0'
//     }
//     stages {
// //         stage('Clone repository') {
// // 	      steps {	      
// // 		      git 'https://github.com/ProjectDevelopment3/Croffle-front.git'
// // 		      }
// // 	 }
// 	stage('Test image') {
// 		steps {
// 			      		sh "pwd" 
// 			      		sh "rm -rf /var/www/croffle/dist"
// 			      		dir ("/var/jenkins_home/workspace/crof") {   
// 		 			sh "npm install"
// 					sh "ls -al" 
// 						sh "scp -r dist ohsh1477@34.64.45.86:/var/www/croffle"
				
// 				}
// 			}
// 		}
// 	    }
// 	}
                                         
