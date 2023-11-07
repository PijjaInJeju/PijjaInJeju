package com.A605.pijja.domain.plan.service;

import com.A605.pijja.domain.plan.dto.request.*;
import com.A605.pijja.domain.plan.dto.response.GetRouteResponseDto;
import com.A605.pijja.domain.plan.dto.response.GetRouteTmapResponseDto;
import com.A605.pijja.domain.plan.dto.response.PathDto;
import com.A605.pijja.domain.plan.dto.response.PlaceDto;
import com.A605.pijja.domain.plan.entity.Path;
import com.A605.pijja.domain.plan.entity.PlaceTest;
import com.A605.pijja.domain.plan.repository.PathRepository;
import com.A605.pijja.domain.plan.repository.PlaceTestRepository;
import com.A605.pijja.global.tmap.TmapConfig;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.reactive.function.client.WebClient;

import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.sql.Blob;
import java.util.*;

@Service
@RequiredArgsConstructor
public class PathServiceImpl implements PathService {
    private final TmapConfig tmapConfig;
    private final PathRepository pathRepository;
    private final PlaceTestRepository placeTestRepository;
    private final WebClient webClient;

    @Override
    @Transactional(readOnly = true) // 두 여행지 사이의 path가 db에 있는지 없는지
    public GetRouteTmapResponseDto searchRoute(Long startPlaceId,Long endPlaceId) {
        Path path=pathRepository.findByStartPlaceAndEndPlace(startPlaceId, endPlaceId);

        if(path==null){
            return null;
        }
        return GetRouteTmapResponseDto.builder()
                .distance(path.getDistance())
                .time(path.getTime())
                .build();
    }

    @Override
    @Transactional
    public void addPath(AddRouteRequestDto requestDto) {
        PlaceTest startPlace=placeTestRepository.findById(requestDto.getStartPlaceId()).get();
        PlaceTest endPlace=placeTestRepository.findById(requestDto.getEndPlaceId()).get();
        Path newPath=Path.builder()
                .startPlace(startPlace)
                .endPlace(endPlace)
                .distance(requestDto.getDistance())
                .time(requestDto.getTime())
                .path(requestDto.getPathDto())
                .build();
        pathRepository.save(newPath);
    }

    @Override
    @Transactional
    public GetRouteResponseDto kruskal(PriorityQueue<KruskalRequestDto> pq,List<GetRouteTmapRequestDto> requestDto){
        int totalDistance=0;
        int totalTime=0;
        ArrayList<PlaceDto> placeList=new ArrayList<>();
        ArrayList<Integer>[] arr=new ArrayList[requestDto.size()];
        ArrayList<PathDto> pathList=new ArrayList<>();
        HashMap<Long,Integer> map=new HashMap<>(); //map<placeId,idx>
        HashMap<Integer,Long> map2=new HashMap<>(); //map<placeId,idx>
        ObjectMapper objectMapper=new ObjectMapper();
        int[] parent=new int[requestDto.size()];
        for(int i=0;i<requestDto.size();i++){
            arr[i]=new ArrayList<>();
            if(!map.containsKey(requestDto.get(i).getId())){
                map.put(requestDto.get(i).getId(),i);
                map2.put(i,requestDto.get(i).getId());
                parent[i]=i;
            }
        }
        while(!pq.isEmpty()){
            KruskalRequestDto now=pq.poll();
            int place1=map.get(now.getPlace1());
            int place2=map.get(now.getPlace2());

            if(find(place1,parent)!=find(place2,parent)){
                arr[place1].add(place2);
                arr[place2].add(place1);
                union(place1,place2,parent);
                totalDistance+=now.getDist();
                totalTime+=now.getTime();
            }
        }

        ArrayDeque<Integer> q=new ArrayDeque<>();
        int[] ch=new int[requestDto.size()];
        for(int i=0;i<requestDto.size();i++){
            if(arr[i].size()==1){
                q.add(i);
                break;
            }
        }

        while(!q.isEmpty()){
            int now=q.poll();
            PlaceTest place =placeTestRepository.findById(map2.get(now)).get();
            placeList.add(PlaceDto.builder()
                    .id(place.getId())
                    .name(place.getName())
                    .latitude(place.getLat())
                    .longitude(place.getLon()).build());

            ch[now]=1;
            for(int i=0;i<arr[now].size();i++){
                int next=arr[now].get(i);
                if(ch[next]==0){
                    q.add(next);
                }
            }
        }
        for(int j=0;j<placeList.size()-1;j++){
            Long startPlace=placeList.get(j).getId();
            Long endPlace=placeList.get(j+1).getId();
            Path path=pathRepository.findByStartPlaceAndEndPlace(startPlace,endPlace);
            //시작place랑 endplace가 바뀌면 거꾸로

            try {
                JsonNode pathJson = objectMapper.readTree(path.getPath());
                if(path.getStartPlace().getId()==endPlace){
                    for (int i = pathJson.size()-1; i >= 0; i--) {
                        float latitude = pathJson.at("/" + i + "/latitude").floatValue();
                        float longitude = pathJson.at("/" + i + "/longitude").floatValue();
                        pathList.add(PathDto.builder()
                                .latitude(latitude)
                                .longitude(longitude).build());
                    }
                }else {
                    for (int i = 0; i < pathJson.size(); i++) {
                        float latitude = pathJson.at("/" + i + "/latitude").floatValue();
                        float longitude = pathJson.at("/" + i + "/longitude").floatValue();
                        pathList.add(PathDto.builder()
                                .latitude(latitude)
                                .longitude(longitude).build());
                    }
                }
            } catch (Exception e) {
                // JSON 파싱 오류 처리
            }
        }

        return GetRouteResponseDto.builder()
                .placeList(placeList)
                .totalTime(totalTime)
                .totalDistance(totalDistance)
                .pathList(pathList).build();
    }
    public int find(int x,int[] parent){
        if(x==parent[x]){
            return x;
        }
        parent[x]=find(parent[x],parent);
        return parent[x];
    }
    public void union(int a,int b,int[] parent){
        int parentA=find(a,parent);
        int parentB=find(b,parent);
        if(parentA==parentB){
            return ;
        }
        if(parentA<parentB){
            parent[b]=parentA;
        }else{
            parent[a]=parentB;
        }
    }

    @Override
    @Transactional
    public PriorityQueue<KruskalRequestDto> combination(List<GetRouteTmapRequestDto> request, int[] result, int start, int cnt, int size,PriorityQueue<KruskalRequestDto> pq){
        if(cnt==2){
            List<GetRouteTmapRequestDto> requestTmapList=new ArrayList<>();
            requestTmapList.add(request.get(result[0]));
            requestTmapList.add(request.get(result[1]));

            GetRouteTmapResponseDto searchResult=searchRoute(request.get(result[0]).getId(),request.get(result[1]).getId());
            if(searchResult==null){ //티맵 호출 및 db 저장
                routeSearchTmap(requestTmapList);
                searchResult=searchRoute(request.get(result[0]).getId(),request.get(result[1]).getId());
            }
            pq.add(KruskalRequestDto.builder()
                    .place1(request.get(result[0]).getId())
                    .place2(request.get(result[1]).getId())
                    .dist(searchResult.getDistance())
                    .time(searchResult.getTime()).build());
            return pq;
        }
        for(int i=start;i<size;i++){
            result[cnt]=i;
            combination(request,result,i+1,cnt+1,size,pq);
        }
        return pq;
    }

    @Override
    public ResponseEntity<String> getRouteViaTmap(GetRouteViaTmapRequestDto requestDto) {
        String tmapApiKey=tmapConfig.getTmapApiKey();

        WebClient wc=webClient;
        String encodedStartName= URLEncoder.encode(requestDto.getStartName(),StandardCharsets.UTF_8);
        String encodedEndName=URLEncoder.encode(requestDto.getEndName(),StandardCharsets.UTF_8);


        GetRouteViaTmapRequestDto tmapRequest=GetRouteViaTmapRequestDto.builder()
                .startName(encodedStartName)
                .startX(requestDto.getStartX())
                .startY(requestDto.getStartY())
                .startTime(requestDto.getStartTime())
                .endName(encodedEndName)
                .endX(requestDto.getEndX())
                .endY(requestDto.getEndY())
                .viaPoints(requestDto.getViaPoints())
                .build();
        ResponseEntity<String> result=wc.post()
                .uri(uriBuilder -> uriBuilder.path("/tmap/routes/routeOptimization10")
                        .build())
                .header("appKey",tmapApiKey)
                .bodyValue(tmapRequest)
                .retrieve()
                .toEntity(String.class)
                .block();
        return result;
    }


    public void routeSearchTmap(List<GetRouteTmapRequestDto> request){

        String tmapApiKey=tmapConfig.getTmapApiKey();
        WebClient wc=webClient;

        PlaceTest startPlace=placeTestRepository.findById(request.get(0).getId()).get();
        PlaceTest endPlace=placeTestRepository.findById(request.get(1).getId()).get();
        float startY=startPlace.getLat();
        float startX=startPlace.getLon();
        float endY=endPlace.getLat();
        float endX=endPlace.getLon();
        
        //TmapRequestDto 변환
        TmapRequestDto tmapRequest= TmapRequestDto.builder()
                .startY(startY)
                .startX(startX)
                .endY(endY)
                .endX(endX)
                .build();

        ResponseEntity<String> result=wc.post()
                .uri(uriBuilder -> uriBuilder.path("/tmap/routes")
                        .build())
                .header("appKey",tmapApiKey)
                .bodyValue(tmapRequest)
                .retrieve()
                .toEntity(String.class)
                .block();

        // JSON 응답 문자열
        String jsonResponse = result.getBody();

        // Jackson ObjectMapper를 사용하여 JSON 파싱
        ObjectMapper objectMapper = new ObjectMapper();

        try {
            System.out.println("API호출!!!!!!!!!!!!!!!!!!!!!!!!");
            ArrayList<AddRouteRequestDto.PathDto> pathDtoList=new ArrayList<>();



            JsonNode jsonNode = objectMapper.readTree(jsonResponse);
            JsonNode totalDistance=jsonNode.at("/features/0/properties/totalDistance");
            JsonNode totalTime=jsonNode.at("/features/0/properties/totalTime");
            JsonNode jsonNodeList=jsonNode.at("/features");

            //path 좌표
            for(int i=0;i<jsonNodeList.size();i++) {
                JsonNode type = jsonNode.at("/features/" + i + "/geometry/type");
                if (type.asText().equals("LineString")) {
                    JsonNode node=jsonNode.at("/features/" + i + "/geometry/coordinates");

                    for (int j = 0; j < node.size(); j++) {
                        JsonNode nodeList = jsonNode.at("/features/" + i + "/geometry/coordinates/" + j);

                        pathDtoList.add(AddRouteRequestDto.PathDto.builder()
                                .latitude(nodeList.get(1).floatValue())
                                .longitude(nodeList.get(0).floatValue())
                                .build());

                    }
                }
            }

            String jsonPath = objectMapper.writeValueAsString(pathDtoList);

            AddRouteRequestDto addRequest= AddRouteRequestDto.builder()
                    .startPlaceId(request.get(0).getId())
                    .endPlaceId(request.get(1).getId())
                    .distance(totalDistance.floatValue())
                    .time(totalTime.floatValue())
                    .pathDto(jsonPath)
                    .build();

            addPath(addRequest);

        } catch (IOException e) {
            e.printStackTrace();
        }
    }




}
