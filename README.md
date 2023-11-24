# PIJJA in 제주
![image (1)](https://github.com/PijjaInJeju/PijjaInJeju/assets/58164681/108101d3-ea0e-40fd-ad74-1a072e374e7e)

# 목차
#### 1. [프로젝트 개요](#프로젝트-개요)
#### 2. [기술 스택](#기술-스택)
#### 3. [주요 기능](#주요-기능)
#### 4. [화면 구성](#화면-구성)
#### 5. [RESTful API 연동 규격서](#RESTful-API-연동-규격서)
#### 6. [아키텍쳐](#아키텍쳐)
#### 7. [디렉토리 구조](#디렉토리-구조)
#### 8. [팀 정보](#팀-정보)

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
<img src="https://img.shields.io/badge/React Native-61DAFB?style=for-the-badge&logo=react&logoColor=white">

#### Back End
<img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white"> <img src="https://img.shields.io/badge/MySql-4478A1?style=for-the-badge&logo=mysql&logoColor=white"> <img src="https://img.shields.io/badge/springsecurity-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white"> <img src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white"> <img src="https://img.shields.io/badge/scikitlearn-F7931E?style=for-the-badge&logo=scikitlearn&logoColor=white"> <img src="https://img.shields.io/badge/gradle-02303A?style=for-the-badge&logo=gradle&logoColor=white"> <img src="https://img.shields.io/badge/spring data jpa-F80000?style=for-the-badge&logo=jpa&logoColor=white">
<br>

#### Infra
<img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"> <img src="https://img.shields.io/badge/amazonec2-FF9900?style=for-the-badge&logo=amazonec2&logoColor=white"> <img src="https://img.shields.io/badge/jenkins-D24939?style=for-the-badge&logo=jenkins&logoColor=white">
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

### 1) 로그인 및 메인페이지

<table>
  <tbody>
    <tr>
      <td>
        로그인
      </td>
      <td>
        메인 화면 
      </td>
    <tr/>
    <tr>
      <td>
      <p align="center">
      <img src="/images/로그인.gif" width="260" height="450">
      </p>
      </td>
      <td>
      <p align="center">
      <img src="/images/메인화면.gif" width="260" height="450">
      </p>
      </td>
    <tr/>
  </tobdy>
</table>

### 2) 여행 일정 정보 입력

<table>
  <tbody>
    <tr>
      <td>
        여행 제목, 기간 설정
      </td>
      <td>
        가고 싶은 여행지 추가
      </td>
    <tr/>
    <tr>
      <td>
      <p align="center">
        <img src="/images/여행일정설정.gif" width="260" height="450"  >
        </p>
      </td>
      <td>
      <p align="center">
        <img src="/images/여행지 추가.gif" width="260" height="450"  >
        </p>
      </td>
    <tr/>
  </tobdy>
</table>

### 3) 여행 일정별 추천 및 동선 제공

<table>
  <tbody>
    <tr>
      <td>
        일자별 여행 동선 제공
      </td>
      <td>
        여행 상세 동선 확인
      </td>
      <td>
        여행 상세 동선 제공
      </td>
    <tr/>
    <tr>
      <td>
      <p align="center">
        <img src="/images/여행지 자동 추천.gif" width="260" height="450"  >
        </p>
      </td>
      <td>
      <p align="center">
              <img src="/images/여행 계획보기.gif" width="260" height="450"  >
        </p>
      </td>
      <td>
      <p align="center">
      <img src="/images/지도사용법.gif" width="260" height="450"  >
        </p>
      </td>
    <tr/>
  </tobdy>
</table>

### 4) 여행 지점들의 네이버맵, 티맵 연동

<table>
  <tbody>
    <tr>
      <td>
        네이버 맵
      </td>
      <td>
        티맵 
      </td>
    <tr/>
    <tr>
      <td>
      <p align="center">
        <img src="/images/네이버맵 연동.gif" width="260" height="450"  >
        </p>
      </td>
      <td>
      <p align="center">
        <img src="/images/티맵연동.gif" width="260" height="450"  >
        </p>
      </td>
    <tr/>
  </tobdy>
</table>

### 5) 여행 그룹 성향 입력 및 추천

<table>
  <tbody>
    <tr>
      <td>
        여행지 성향 설정
      </td>
      <td>
        여행지 추천 
      </td>
    <tr/>
    <tr>
      <td>
      <p align="center">
        <img src="/images/성향체크.gif" width="260" height="450"  >
        </p>
      </td>
      <td>
      <p align="center">
        <img src="/images/추천.gif" width="260" height="450"  >
        </p>
      </td>
    <tr/>
  </tobdy>
</table>

# RESTful API 연동 규격서
api 명세서같이 화면 별로 구분하여 연동 규격서 작성 필

# 아키텍쳐
<img src="/images/SA2.png" width=80% margin="auto">

# 디렉토리 구조
```bash
📦pijja
 ┣ 📂domain
 ┃ ┣ 📂member
 ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┣ 📜CompanionController.java
 ┃ ┃ ┃ ┣ 📜MemberController.java
 ┃ ┃ ┃ ┗ 📜TendencyController.java
 ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┣ 📂request
 ┃ ┃ ┃ ┃ ┣ 📜CompanionAddRequestDto.java
 ┃ ┃ ┃ ┃ ┣ 📜CompanionIdRequestDto.java
 ┃ ┃ ┃ ┃ ┣ 📜CompanionInviteRequestDto.java
 ┃ ┃ ┃ ┃ ┣ 📜CompanionJoinRequestDto.java
 ┃ ┃ ┃ ┃ ┣ 📜MemberRegistRequestDto.java
 ┃ ┃ ┃ ┃ ┗ 📜TendencyAddDto.java
 ┃ ┃ ┃ ┣ 📂response
 ┃ ┃ ┃ ┃ ┣ 📜CompanionCreateDto.java
 ┃ ┃ ┃ ┃ ┣ 📜CompanionJoinDto.java
 ┃ ┃ ┃ ┃ ┣ 📜CompanionListDto.java
 ┃ ┃ ┃ ┃ ┣ 📜MemberDetailDto.java
 ┃ ┃ ┃ ┃ ┣ 📜MemberListDto.java
 ┃ ┃ ┃ ┃ ┣ 📜MyCompanionListDto.java
 ┃ ┃ ┃ ┃ ┗ 📜TendencyCreateDto.java
 ┃ ┃ ┃ ┣ 📜FailResponseDto.java
 ┃ ┃ ┃ ┣ 📜MemberCompanionDto.java
 ┃ ┃ ┃ ┗ 📜SuccessResponseDto.java
 ┃ ┃ ┣ 📂entity
 ┃ ┃ ┃ ┣ 📜Companion.java
 ┃ ┃ ┃ ┣ 📜CompanionTendency.java
 ┃ ┃ ┃ ┣ 📜Member.java
 ┃ ┃ ┃ ┣ 📜MemberCompanion.java
 ┃ ┃ ┃ ┣ 📜Role.java
 ┃ ┃ ┃ ┗ 📜Tendency.java
 ┃ ┃ ┣ 📂repository
 ┃ ┃ ┃ ┣ 📜CompanionRepository.java
 ┃ ┃ ┃ ┣ 📜CompanionTendencyRepository.java
 ┃ ┃ ┃ ┣ 📜MemberCompanionRepository.java
 ┃ ┃ ┃ ┣ 📜MemberRepository.java
 ┃ ┃ ┃ ┗ 📜TendencyRepository.java
 ┃ ┃ ┗ 📂service
 ┃ ┃ ┃ ┣ 📜CompanionInviteService.java
 ┃ ┃ ┃ ┣ 📜CompanionJoinedListService.java
 ┃ ┃ ┃ ┣ 📜CompanionJoinService.java
 ┃ ┃ ┃ ┣ 📜CompanionListService.java
 ┃ ┃ ┃ ┣ 📜CompanionRegistService.java
 ┃ ┃ ┃ ┣ 📜CompanionsMemberService.java
 ┃ ┃ ┃ ┣ 📜MemberRegistService.java
 ┃ ┃ ┃ ┗ 📜TendencyAddService.java
 ┃ ┣ 📂place
 ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┗ 📜PlaceController.java
 ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┣ 📂request
 ┃ ┃ ┃ ┃ ┗ 📜SearchPlaceRequestDto.java
 ┃ ┃ ┃ ┗ 📂response
 ┃ ┃ ┃ ┃ ┣ 📜AllPlacesResponseDto.java
 ┃ ┃ ┃ ┃ ┣ 📜PlaceDetailResponseDto.java
 ┃ ┃ ┃ ┃ ┗ 📜SearchPlaceResponseDto.java
 ┃ ┃ ┣ 📂entity
 ┃ ┃ ┃ ┣ 📜Place.java
 ┃ ┃ ┃ ┗ 📜Visit.java
 ┃ ┃ ┣ 📂repository
 ┃ ┃ ┃ ┣ 📜PlaceRepository.java
 ┃ ┃ ┃ ┣ 📜PlaceRepositoryCustom.java
 ┃ ┃ ┃ ┣ 📜PlaceRepositoryImpl.java
 ┃ ┃ ┃ ┣ 📜VisitRepository.java
 ┃ ┃ ┃ ┣ 📜VisitRepositoryCustom.java
 ┃ ┃ ┃ ┗ 📜VisitRepositoryImpl.java
 ┃ ┃ ┗ 📂service
 ┃ ┃ ┃ ┣ 📜PlaceService.java
 ┃ ┃ ┃ ┗ 📜PlaceServiceImpl.java
 ┃ ┣ 📂plan
 ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┣ 📜PathController.java
 ┃ ┃ ┃ ┗ 📜PlanController.java
 ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┣ 📂request
 ┃ ┃ ┃ ┃ ┣ 📜AddRecommendPlaceRequestDto.java
 ┃ ┃ ┃ ┃ ┣ 📜AddRouteRequestDto.java
 ┃ ┃ ┃ ┃ ┣ 📜CompleteMakePlanRequestDto.java
 ┃ ┃ ┃ ┃ ┣ 📜GetRouteTmapRequestDto.java
 ┃ ┃ ┃ ┃ ┣ 📜KruskalRequestDto.java
 ┃ ┃ ┃ ┃ ┣ 📜ListRecommendPlacesRequestDto.java
 ┃ ┃ ┃ ┃ ┣ 📜MakePlanRequestDto.java
 ┃ ┃ ┃ ┃ ┣ 📜PlanDetailRequestDto.java
 ┃ ┃ ┃ ┃ ┣ 📜PlanListRequestDto.java
 ┃ ┃ ┃ ┃ ┣ 📜SearchPlaceFromTmapRequestDto.java
 ┃ ┃ ┃ ┃ ┗ 📜TmapRequestDto.java
 ┃ ┃ ┃ ┗ 📂response
 ┃ ┃ ┃ ┃ ┣ 📜CompleteMakePlanResonseDto.java
 ┃ ┃ ┃ ┃ ┣ 📜GetRouteResponseDto.java
 ┃ ┃ ┃ ┃ ┣ 📜GetRouteTmapResponseDto.java
 ┃ ┃ ┃ ┃ ┣ 📜MakePlanResonseDto.java
 ┃ ┃ ┃ ┃ ┣ 📜PathDto.java
 ┃ ┃ ┃ ┃ ┣ 📜PlaceDto.java
 ┃ ┃ ┃ ┃ ┣ 📜PlanGroupingResponseDto.java
 ┃ ┃ ┃ ┃ ┣ 📜PlanListResponseDto.java
 ┃ ┃ ┃ ┃ ┗ 📜SearchPlaceFromTmapResponseDto.java
 ┃ ┃ ┣ 📂entity
 ┃ ┃ ┃ ┣ 📜DayPlan.java
 ┃ ┃ ┃ ┣ 📜DayPlanPlace.java
 ┃ ┃ ┃ ┣ 📜Path.java
 ┃ ┃ ┃ ┗ 📜Plan.java
 ┃ ┃ ┣ 📂repository
 ┃ ┃ ┃ ┣ 📜DayPlanPlaceRepository.java
 ┃ ┃ ┃ ┣ 📜DayPlanPlaceRepositoryCustom.java
 ┃ ┃ ┃ ┣ 📜DayPlanPlaceRepositoryImpl.java
 ┃ ┃ ┃ ┣ 📜DayPlanRepository.java
 ┃ ┃ ┃ ┣ 📜DayPlanRepositoryCumstom.java
 ┃ ┃ ┃ ┣ 📜DayPlanRepositoryImpl.java
 ┃ ┃ ┃ ┣ 📜PathRepository.java
 ┃ ┃ ┃ ┣ 📜PathRepositoryCustom.java
 ┃ ┃ ┃ ┣ 📜PathRepositoryImpl.java
 ┃ ┃ ┃ ┣ 📜PlanRepository.java
 ┃ ┃ ┃ ┣ 📜PlanRepositoryCustom.java
 ┃ ┃ ┃ ┗ 📜PlanRepositoryImpl.java
 ┃ ┃ ┗ 📂service
 ┃ ┃ ┃ ┣ 📜PathService.java
 ┃ ┃ ┃ ┣ 📜PathServiceImpl.java
 ┃ ┃ ┃ ┣ 📜PlanService.java
 ┃ ┃ ┃ ┗ 📜PlanServiceImpl.java
 ┃ ┗ 📂recommend
 ┃ ┃ ┣ 📂controller
 ┃ ┃ ┃ ┗ 📜RecommendController.java
 ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┣ 📂request
 ┃ ┃ ┃ ┃ ┗ 📜RecommendRequestDto.java
 ┃ ┃ ┃ ┗ 📂response
 ┃ ┃ ┃ ┃ ┗ 📜RecommendResponseDto.java
 ┃ ┃ ┣ 📂entity
 ┃ ┃ ┃ ┗ 📜Recommend.java
 ┃ ┃ ┣ 📂mapper
 ┃ ┃ ┃ ┗ 📜PathMapper.java
 ┃ ┃ ┣ 📂repository
 ┃ ┃ ┃ ┣ 📜RecommendRepository.java
 ┃ ┃ ┃ ┣ 📜RecommendRepositoryCustom.java
 ┃ ┃ ┃ ┗ 📜RecommendRepositoryImpl.java
 ┃ ┃ ┗ 📂service
 ┃ ┃ ┃ ┣ 📜RecommendService.java
 ┃ ┃ ┃ ┗ 📜RecommendServiceImpl.java
 ┣ 📂global
 ┃ ┣ 📂time
 ┃ ┃ ┗ 📜TimeUtil.java
 ┃ ┗ 📂tmap
 ┃ ┃ ┗ 📜TmapConfig.java
 ┣ 📜AppConfig.java
 ┗ 📜PijjaApplication.java
```

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
