# PIJJA in 제주
![image__1_](/uploads/4db1492af44adab149d834abbaa3e33a/image__1_.png)
# 목차
#### 1. [프로젝트 개요](#프로젝트-개요)
#### 2. [기술 스택](#기술-스택)
#### 3. [주요 기능](#주요-기능)
#### 4. [화면 구성](#화면-구성)
#### 5. [아키텍쳐](#아키텍쳐)
#### 6. [팀 정보](#팀-정보)

# 프로젝트 개요
>#### 프로젝트 명
>PIJJA in 제주
>
>#### 개발 기간
>2023.10.09 - 2023.11.20
>
>#### 프로젝트 소개
>즉흥적인 P, 너도 계획적인 J가 될 수 있어!
> <b>P를 위한 J 식 여행 플래너 in 제주</b><br>
>빅데이터 추천을 통해 여행자의 성향 분석 및 입력된 여행지에 대한 최적의 여행 동선 제공해주는 어플리케이션입니다.
# 기술 스택

#### Front End
<img src="https://img.shields.io/badge/React Native-61DAFB?style=for-the-badge&logo=react&logoColor=white"><br>

#### Back End
<img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white">
<img src="https://img.shields.io/badge/MySql-4478A1?style=for-the-badge&logo=mysql&logoColor=white">
<img src="https://img.shields.io/badge/Spring Jpa-6DB33Fstyle=for-the-badge&logo=spring&logoColor=white">
<br>

#### Infra
<img src="https://img.shields.io/badge/Amazon Rds-527FFF?style=for-the-badge&logo=amazonrds&logoColor=white">
<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white">
<img src="https://img.shields.io/badge/Docker Compose-4285F4style=for-the-badge&logo=docker&logoColor=white">
<img src="https://img.shields.io/badge/jenkins-D24939style=for-the-badge&logo=jenkins&logoColor=white">
<br>



# 주요 기능

### 여행 그룹 성향 입력 및 분석 
여행 그룹의 성향을 입력받고 이를 빅데이터 기반으로 분석합니다.<br>

>#### 입력 여행 성향: <br>
>`공항`, `식도락 여행`, `쇼핑`, `제주의 문화유산`, <br>
>`레저와 체험`,`전시와 행사`, `천천히 걷기`, `휴식과 치유 여행` <br>

### 여행 지점들의 일자별 최적 동선 제공

사용자가 원하는 여행 지점들을 입력받고 거리정보, <br>
알고리즘을 기반으로 최적의 동선을 제공합니다. <br>

### 현재 여행 그룹의 여행지 추천

형태소 분석 및 빅데이터 기반으로 여행 그룹에 맞는 <br>
여행지들을 추천합니다.<br>

# 화면 구성
<table>
  <tbody>
    <tr>
      <td>
        <B>로그인</B>
      </td>
      <td>
        <B>메인페이지</B>
      </td>
      <td>
        <B>성향 설정</B>
      </td>
      <td>
        <B>일정 설정</B>
      </td>
    <tr/>
    <tr>
      <td>
        <img src="/uploads/4352a18e8f2f67cb6bb9fc8471ec15e0/로그인.gif" width="1500" height="400" style="object-fit: cover;">
      </td>
      <td>
        <img src="/uploads/a4cdcd7338feeb6971e0bfe99306ec88/메인화면.gif" width="1500" height="400" style="object-fit: cover;">
      </td>
      <td>
        <img src="/uploads/037d9a14c20fc06a51cf73995b3b0090/성향체크.gif" width="1500" height="400" style="object-fit: cover;">
      </td>
      <td>
        <img src="/uploads/5703c3bf5b304bf0eeccc53a10988083/여행일정설정.gif" width="1500" height="400" style="object-fit: cover;">
      </td>
    <tr/>
    <tr>
      <td>
        <B>지도 리사이즈 조작</B>
      </td>
      <td>
        <B>여행지 선정 추가</B>
      </td>
      <td>
        <B>여행 일정 자동 추천</B>
      </td>
      <td>
        <B>여행 모임 리스트 확인</B>
      </td>
    <tr/>
    <tr>
      <td>
        <img src="/uploads/29ccc98ad5bd230a134e5ce9d1992396/지도_리사이즈.gif" width="1500" height="400" style="object-fit: cover;">
      </td>
      <td>
        <img src="/uploads/15a088355f7e5930b4441e4ff6b1c8ed/여행지_추가.gif" width="1500" height="400" style="object-fit: cover;">
      </td>
      <td>
        <img src="/uploads/c2530fa332ce941dff0541e1048ea81e/여행지_자동_추천.gif" width="1500" height="400" style="object-fit: cover;">
      </td>
      <td>
        <img src="/uploads/9682286434ffba80a1e48c2ad7c07011/여행_계획보기.gif" width="1500" height="400" style="object-fit: cover;">
      </td>
    </tr>
    <tr>
      <td>
        <B>모임지 지도 사용 가능</B>
      </td>
      <td>
        <B>티맵 연동</B>
      </td>
      <td>
        <B>네이버맵 연동</B>
      </td>
    <tr/>
    <tr>
      <td>
        <img src="/uploads/e8d17562bc440e7fc97a6054e2217750/지도사용법.gif" width="1500" height="400" style="object-fit: cover;">
      </td>
      <td>
        <img src="/uploads/dc14131f87f1db28929c8a0887e9161f/티맵연동.gif" width="1500" height="400" style="object-fit: cover;">
      </td>
      <td>
        <img src="/uploads/6a4f3ad6bf99f79d4ab0925e10f6e817/네이버맵_연동.gif" width="1500" height="400" style="object-fit: cover;">
      </td>
    </tr>
  </tbody>
</table>
# 아키텍쳐
# 팀 정보
<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/tjsguddl96"><img src="https://avatars.githubusercontent.com/u/58164681?v=4" width="150px;" alt=""/><br /><b>김선형</b></a> <br>BE (팀장) </b><br /></td>
      <td align="center"><a href="https://github.com/smartopens"><img src="https://avatars.githubusercontent.com/u/44837403?v=4" width="150px;" alt=""/><br /><b>김현명</b></a> <br>FE </b><br /></td>
      <td align="center"><a href="https://github.com/steve15963"><img src="https://avatars.githubusercontent.com/u/77353988?v=4" width="150px;" alt=""/><br /><b>송진현</b></a> <br>FE </b><br /></td>
    <tr/>
      <td align="center"><a href="https://github.com/chech2"><img src="https://avatars.githubusercontent.com/u/90683516?v=4" width="150px;" alt=""/><br /><b>이채림</b></a> <br>BE </b><br /></td>
      <td align="center"><a href="https://github.com/juuyoungjeon"><img src="https://avatars.githubusercontent.com/u/44489852?v=4" width="150px;" alt=""/><br /><b>전주영</b></a> <br>BE (부팀장) </b><br /></td>
      <td align="center"><a href="https://github.com/leehk77789"><img src="https://avatars.githubusercontent.com/u/96775737?v=4" width="150px;" alt=""/><br /><b>정유준</b></a> <br>BE </b><br /></td>
    </tr>
  </tbody>
</table>
