#!groovy
pipeline {
	agent {
    docker { image 'node:latest' }
  }
  stages {
    stage('Build Image') {
    	agent any
      steps {
      	sh "docker build -t ihsan/ticket-ws:latest ."
      }
    }
    stage('Cleaning') {
    	agent any
      steps {
      	sh 'docker image prune -f'
      	sh 'docker rm ticket_socket -f'
      }
    }
    stage('Create Tag') {
    	agent any
      steps {
      	sh 'docker image rm ihsan/ticket-ws:latest'
      }
    }
    stage('Deploy') {
    	agent any
      steps {
      	sh 'docker run --name ticket_socket -p 3000:3000  -d ihsan/ticket-ws:latest'
      }
    }
  }
}