pipeline {
    agent none
    stages {
        stage('setup') {
            agent any
            steps {
               sh 'docker-compose up -d'
               sh 'docker ps'
            }
        }
        stage('test') {
            agent {
                docker { image 'node' }
            }
            steps {
                //replacing HUB_HOST
                sh 'sed -i "s/localhost/172.17.0.1/g" .env'
                sh 'npm i && npm start'
            }
        }
        stage('tearDown') {
            agent any
            steps {
                sh 'docker-compose down'
                sh 'docker ps'
            }
        }
    }
}
