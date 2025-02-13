FROM openjdk:17-jdk-slim
ARG JAR_FILE=target/catering-service-0.0.1.jar
COPY ${JAR_FILE} read-catering-service.jar
EXPOSE 8072
ENTRYPOINT ["java","-jar","read-catering-service.jar"]