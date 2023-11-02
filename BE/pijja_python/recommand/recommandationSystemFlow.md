## 이동 경로 데이터
### 사용자의 입력 여행지 기반의 위/경도 데이터 DB에서 가져오기
<details>
<summary>DB에 저장된 여행 경로 데이터 예시</summary>
<div markdown="1">

```java

public class route{
    int totalDistance;
    position start, end;
    ArraryList<position> movingPositionList;
    
}


public class position{
    int x, y;
}

```

</div>
</details>


## 거리 계산
이동 경로 상의 위/경도 지점에서 3km 반경의 내의 여행지를 추천합니다.</br>
이때, 범위내에 제외되는 추천지를 없애기 위해 각 위/경도 지점 사이는 1.5km로 지정합니다.</br>
만약 여행지 간의 거리가 3km가 되지 않는다면 출발지와 목적지 2개에 대해서만 실행합니다. 


![2021_04_user_count](./추천을%20위한%20그림.PNG)

### 현재 사용할 것으로 생각되는 거리 계산 공식
1. 하버사인 공식 (Haversine formula)</br>
    지구를 완벽한 구로 가정하고 두 지점 사이의 최단 거리를 계산합니다.</br>

2. 구면 코사인 공식(Spherical Law of Cosines)

### 4. 여행지 추천 로직
거리를 이용하여 반경 3km내로 추천할 여행지를 제한하였으니 이제 여행지 추천을 시작합니다. 

- 이동 경로상의 1.5km 지점마다,. 3km 반경 내의 모든 여행지를 찾습니다.
- 메이트를 이용하여 백터를 생성합니다.
- 생성된 백터를 이용하여 유사도를 측정하고 추천합니다.
- 추천된 여행지중 여행 테마가 일치하는 순으로  여행지를 추천합니다.</br>
    백터 유사도와 여행 테마를 같이 고려해서 추천 순을 정하면 더 좋을 듯 합니다.