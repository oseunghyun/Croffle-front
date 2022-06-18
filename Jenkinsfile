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
		}
  }
	stage('Push image') {
		docker.withRegistry('https://registry.hub.docker.com', 'osh1477'){ 
			app.push("${env.BUILD_NUMBER}")
			app.push("latest")
    }
  }
}

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

pipeline {
    agent any
    environment {
			gcloud container clusters get-credentials kube --zone asia-northeast3-a --project 
			PROJECT_ID = 'data-visitor-326307'
      CLUSTER_NAME = 'kube'
      LOCATION = 'asia-northeast3-a'
      CREDENTIALS_ID = 'gke' 
    }
    stages {
        stage('Checkout code') {
					steps {
						checkout scm
          }
        }
        stage('build gradle') {
            steps {
                
            }
            post {
                success {
                    echo 'build success'
                }
                failure {
                    echo 'build failed'
                }
            }
        }
        stage('Build image'){
            steps {
                croffle = docker.build("osh1477/croffle-front")
            }
        }
        stage("Push image") {
            steps {
                script{
                    docker.withRegistry('https://registry.hub.docker.com','docker hub'){
                    croffle.push("latest")
                }
            }
        }
        stage('Deploy to GKE'){
            when {
                branch 'main'
            }
            steps{
                step([$class: 'KubernetesEngineBuilder', projectId: env.PROJECT_ID, clusterName: env.CLUSTER_NAME, location: env.LOCATION, manifestPattern: 'deployment.yml', credentialsId: env.CREDENTIALS_ID, verifyDeployments: true])
            }
        }
    }
}
