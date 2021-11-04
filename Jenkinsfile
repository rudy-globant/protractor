pipeline {
    agent any
    stages {
        stage('setup') {
            steps {
               sh 'docker-compose up -d'
               sh 'docker ps'
            }
        }
        stage('test') {
            agent {
                docker {
                    image 'node:14-alpine'
                }
            }
            steps {
                //replacing HUB_HOST abc
                sh 'sed -i "s/localhost/172.17.0.1/g" .env'
                sh 'npm i && npm start'
            }
        }
    }
    post {
        always {
            sh 'docker-compose down'
            sh 'docker ps'
        }
    }
}
