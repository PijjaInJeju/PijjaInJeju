package com.A605.pijja.domain.plan.service;

import com.A605.pijja.domain.plan.dto.request.GetRouteTmapRequestDto;
import com.A605.pijja.domain.plan.dto.request.AddRouteRequestDto;
import com.A605.pijja.domain.plan.dto.request.GetRouteViaTmapRequestDto;
import com.A605.pijja.domain.plan.dto.request.TmapRequestDto;
import com.A605.pijja.domain.plan.dto.response.GetRouteTmapResponseDto;
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
import org.springframework.web.util.DefaultUriBuilderFactory;

import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PathServiceImpl implements PathService {
    private final TmapConfig tmapConfig;
    private final PathRepository pathRepository;
    private final PlaceTestRepository placeTestRepository;


    @Override
    @Transactional(readOnly = true)
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
                .build();
        pathRepository.save(newPath);
    }


    @Override
    @Transactional
    public void combination(List<GetRouteTmapRequestDto> request,int[] result,int start, int cnt,int size){
        if(cnt==2){
            List<GetRouteTmapRequestDto> requestTmapList=new ArrayList<>();
            requestTmapList.add(request.get(result[0]));
            requestTmapList.add(request.get(result[1]));

            GetRouteTmapResponseDto searchResult=searchRoute(request.get(result[0]).getId(),request.get(result[1]).getId());
            if(searchResult==null){ //티맵 호출 및 db 저장
                routeSearchTmap(requestTmapList);
                searchResult=searchRoute(request.get(result[0]).getId(),request.get(result[1]).getId());
            }
            return ;
        }
        for(int i=start;i<size;i++){
            result[cnt]=i;
            combination(request,result,i+1,cnt+1,size);
        }

    }

    @Override
    public ResponseEntity<String> getRouteViaTmap(GetRouteViaTmapRequestDto requestDto) {
        String tmapApiKey=tmapConfig.getTmapApiKey();
        String tmapUrl=tmapConfig.getTmapUrl();
        DefaultUriBuilderFactory factory=new DefaultUriBuilderFactory(tmapUrl);
        factory.setEncodingMode(DefaultUriBuilderFactory.EncodingMode.VALUES_ONLY);

        WebClient wc= WebClient.builder()
                .uriBuilderFactory(factory)
                .baseUrl(tmapUrl)
                .build();

        String encodedStartName= URLEncoder.encode(requestDto.getStartName(),StandardCharsets.UTF_8);
        String encodedEndName=URLEncoder.encode(requestDto.getEndName(),StandardCharsets.UTF_8);


        GetRouteViaTmapRequestDto tmapRequest=GetRouteViaTmapRequestDto.builder()
                .startName(encodedStartName)
                .startX(requestDto.getStartX())
                .startY(requestDto.getStartY())
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
        String tmapUrl=tmapConfig.getTmapUrl();
        DefaultUriBuilderFactory factory=new DefaultUriBuilderFactory(tmapUrl);
        factory.setEncodingMode(DefaultUriBuilderFactory.EncodingMode.VALUES_ONLY);

        WebClient wc= WebClient.builder()
                .uriBuilderFactory(factory)
                .baseUrl(tmapUrl)
                .build();
        
        //TmapRequestDto 변환
        TmapRequestDto tmapRequest= TmapRequestDto.builder()
                .startY(request.get(0).getLat())
                .startX(request.get(0).getLon())
                .endY(request.get(1).getLat())
                .endX(request.get(1).getLon())
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
            JsonNode jsonNode = objectMapper.readTree(jsonResponse);
            JsonNode totalDistance=jsonNode.at("/features/0/properties/totalDistance");
            JsonNode totalTime=jsonNode.at("/features/0/properties/totalTime");
            
            AddRouteRequestDto addRequest= AddRouteRequestDto.builder()
                    .startPlaceId(request.get(0).getId())
                    .endPlaceId(request.get(1).getId())
                    .distance(totalDistance.floatValue())
                    .time(totalTime.floatValue())
                    .build();

            addPath(addRequest);

        } catch (IOException e) {
            e.printStackTrace();
        }
    }

}
