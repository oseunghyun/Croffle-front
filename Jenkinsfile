pipeline {
    agent any
    environment {
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
        stage('Build image'){
            steps {
                script {
			croffle = docker.build("osh1477/croffle-front:${env.BUILD_ID}", "--no-cache .")
		}
            }
        }
        stage("Push image") {
            steps {
                script{
                    docker.withRegistry('https://registry.hub.docker.com','osh1477') {
                        croffle.push("latest")
			croffle.push("${env.BUILD_ID}")
                    }
		}
	    }
        }
        stage('Deploy to GKE'){
            when {
                branch 'master'
            }
            steps{
		sh "sed -i 's/croffle-front:latest/croffle-front:${env.BUILD_ID}/g' deployment.yml"
                step([$class: 'KubernetesEngineBuilder', projectId: env.PROJECT_ID, clusterName: env.CLUSTER_NAME, location: env.LOCATION, manifestPattern: 'deployment.yml', credentialsId: env.CREDENTIALS_ID, verifyDeployments: true])
            }
        }
    }
}
