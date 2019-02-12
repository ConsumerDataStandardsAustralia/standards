

node {
    checkout scm
    def standardsImage = docker.build("standards-staging:${env.BUILD_ID}")
}
