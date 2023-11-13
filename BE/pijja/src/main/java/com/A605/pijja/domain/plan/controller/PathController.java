package com.A605.pijja.domain.plan.controller;

import com.A605.pijja.domain.plan.dto.request.*;
import com.A605.pijja.domain.plan.dto.response.GetRouteResponseDto;
import com.A605.pijja.domain.plan.dto.response.SearchPlaceFromTmapResponseDto;
import com.A605.pijja.domain.plan.entity.PlaceTest;
import com.A605.pijja.domain.plan.service.PathService;
import com.A605.pijja.domain.plan.service.PlaceTestService;
import com.A605.pijja.global.tmap.TmapConfig;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.util.DefaultUriBuilderFactory;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.PriorityQueue;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/path")
public class PathController {
    private final TmapConfig tmapConfig;
    private final PlaceTestService placeTestService;
    private final PathService pathService;

    @PostMapping("")
    public SearchPlaceFromTmapResponseDto searchPlaceFromTmap(@RequestBody SearchPlaceFromTmapRequestDto requestDto) throws JsonProcessingException, UnsupportedEncodingException {
        List<SearchPlaceFromTmapResponseDto> responseDto=new ArrayList<>();
        boolean isPlace=placeTestService.isPlace(requestDto);
        if(!isPlace){ //db저장 X
            System.out.println("Tmap API 호출");
            String tmapApiKey = tmapConfig.getTmapApiKey();
            String tmapUrl = tmapConfig.getTmapUrl();
            DefaultUriBuilderFactory factory = new DefaultUriBuilderFactory(tmapUrl);
            factory.setEncodingMode(DefaultUriBuilderFactory.EncodingMode.VALUES_ONLY);

            WebClient wc = WebClient.builder()
                    .uriBuilderFactory(factory)
                    .baseUrl(tmapUrl)
                    .build();

            String encodedPlace=URLEncoder.encode(requestDto.getPlace(),StandardCharsets.UTF_8);

            //tmap api 호출
            ResponseEntity<String> result = wc.get()
                    .uri(uriBuilder -> uriBuilder.path("/tmap/pois")
                            .queryParam("searchKeyword", encodedPlace)
                            .queryParam("appKey", tmapApiKey)
                            .build())
                    .retrieve()
                    .toEntity(String.class)
                    .block();

            // JSON 응답 문자열
            String jsonResponse = result.getBody();

            // Jackson ObjectMapper를 사용하여 JSON 파싱
            ObjectMapper objectMapper = new ObjectMapper();
            try {
                JsonNode jsonNode = objectMapper.readTree(jsonResponse);
                JsonNode poiArray = jsonNode.at("/searchPoiInfo/pois/poi");
                int poiSize = poiArray.size();
                for (int i = 0; i < poiSize; i++) {
                    JsonNode nameNode = jsonNode.at("/searchPoiInfo/pois/poi/" + i + "/name");
                    JsonNode frontLatNode = jsonNode.at("/searchPoiInfo/pois/poi/" + i + "/frontLat");
                    JsonNode frontLonNode = jsonNode.at("/searchPoiInfo/pois/poi/" + i + "/frontLon");
                    JsonNode upperAddrNameNode = jsonNode.at("/searchPoiInfo/pois/poi/" + i + "/upperAddrName");
                    JsonNode middleAddrNameNode = jsonNode.at("/searchPoiInfo/pois/poi/" + i + "/middleAddrName");
                    JsonNode lowerAddrNameNode = jsonNode.at("/searchPoiInfo/pois/poi/" + i + "/lowerAddrName");
                    if (upperAddrNameNode.asText().equals("제주")) {
                        String name = nameNode.asText();
                        float lat = Float.parseFloat(frontLatNode.asText());
                        float lon = Float.parseFloat(frontLonNode.asText());
                        String middleAddr = middleAddrNameNode.asText();
                        String lowerAddr = lowerAddrNameNode.asText();

                        SearchPlaceFromTmapResponseDto response = SearchPlaceFromTmapResponseDto.builder()
                                .name(name)
                                .lat(lat)
                                .lon(lon)
                                .middleAddrName(middleAddr)
                                .lowerAddrName(lowerAddr)
                                .build();
                        responseDto.add(response);  //첫 번째꺼만 넣자
                    }
                }
                placeTestService.addPlace(responseDto.get(0));
                return responseDto.get(0);
            } catch (IOException e) {
                e.printStackTrace();
                return null;
            }
        }
        System.out.println("Tmap 호출 X");
        PlaceTest placeTestResult=placeTestService.searchPlace(requestDto.getPlace());
        return SearchPlaceFromTmapResponseDto.builder()
                .name(placeTestResult.getName())
                .lat(placeTestResult.getLat())
                .lon(placeTestResult.getLon()).build();
    }


    @PostMapping("/getroute")
    public GetRouteResponseDto getRoute(@RequestBody List<GetRouteTmapRequestDto> requestDto){
        PriorityQueue<KruskalRequestDto> pq=pathService.combination(requestDto,new int[2],0,0, requestDto.size(),new PriorityQueue<>());
        return pathService.kruskal(pq,requestDto);
    }

}
