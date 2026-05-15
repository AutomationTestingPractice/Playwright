pipeline {

    agent any

    tools {
        nodejs 'NodeJS'
    }

    environment {
        CI = 'true'
    }

    parameters {

        choice(
            name: 'ENV',
            choices: ['qa', 'uat', 'prod'],
            description: 'Select Environment'
        )

        choice(
            name: 'BROWSER',
            choices: ['chromium', 'firefox', 'webkit'],
            description: 'Select Browser'
        )
    }

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Run Tests') {
            steps {
                sh """
                ENV=${params.ENV} \
                npx playwright test \
                --project=${params.BROWSER}
                """
            }
        }

        stage('Generate Allure Report') {
            steps {
                sh 'npm run allure:generate'
            }
        }
    }

    post {

        always {

            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true

            archiveArtifacts artifacts: 'allure-report/**', allowEmptyArchive: true

            publishHTML([
                allowMissing: true,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report'
            ])

            cleanWs()
        }

        success {
            echo 'Test Execution Successful'
        }

        failure {
            echo 'Test Execution Failed'
        }
    }
}