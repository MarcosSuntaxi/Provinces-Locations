FROM openjdk:17-jdk-slim
ARG JAR_FILE=target/catering-service-0.0.1.jar
COPY ${JAR_FILE} create-catering-service.jar
EXPOSE 8071
ENTRYPOINT ["java","-jar","create-catering-service.jar"]