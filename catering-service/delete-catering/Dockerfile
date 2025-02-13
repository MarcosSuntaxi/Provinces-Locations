FROM openjdk:17-jdk-slim
ARG JAR_FILE=target/catering-service-0.0.1.jar
COPY ${JAR_FILE} delete-catering-service.jar
EXPOSE 8074
ENTRYPOINT ["java","-jar","delete-catering-service.jar"]