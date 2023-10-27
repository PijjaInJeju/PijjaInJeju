#!/bin/bash

# base 이미지 설정
FROM openjdk:17

# jar 파일 위치를 변수로 설정
ARG JAR_FILE=build/libs/*-SNAPSHOT.jar

## 현재 위치와 JAR_FILE 디렉토리의 파일 목록 출력
#RUN ls -l build/libs/

# jar 파일을 컨테이너 내부에 복사
COPY ${JAR_FILE} app.jar

# 외부 호스트 8088 포트로 노출
EXPOSE 8080

# 실행 명령어
ENTRYPOINT ["java","-Dspring.profiles.active=prod","-jar","/app.jar"]
