pipeline {
    agent none
    stages {
        stage('build') {
            agent {
                docker { image 'node' }
            }
            steps {
               sh 'node -v'
               sh 'npm i && npm start'
            }
        }
        stage('deploy') {
            agent any
            steps {
               sh 'echo "deploy...."'
            }
        }
    }
}