pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test -- --reporters=default --reporters=jest-junit'
                junit '**/junit.xml'
            }
        }
        stage('Deploy') {
            steps {
                sh 'npm run build'
                sh 'gcloud builds submit --config cloudbuild.yaml .'
            }
        }
    }

    post {
        failure {
            googlechatnotification url: 'https://chat.googleapis.com/v1/spaces/yL2WcEjiINuhpUggHhEIHiN3f/messages?key=KEY_ID&token=TOKEN_ID', message: 'Jest test failures detected in build ${BUILD_NUMBER}.'
        }
        always {
            echo 'The build is completed!'
        }
    }
}