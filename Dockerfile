FROM maven:3.6.0-jdk-8-slim as build
WORKDIR /app
COPY backend/src /app/src
COPY backend/pom.xml /app

RUN mvn -f /app/pom.xml clean package
FROM adoptopenjdk/openjdk11:alpine-slim

WORKDIR /app
COPY --from=build /app/target/atc-wechat-api-0.0.1-SNAPSHOT.jar .

EXPOSE 8080
CMD ["java", "-jar", "/app/atc-wechat-api-0.0.1-SNAPSHOT.jar"]