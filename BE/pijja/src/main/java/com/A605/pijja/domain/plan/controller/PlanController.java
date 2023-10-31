package com.A605.pijja.domain.plan.controller;

import com.A605.pijja.domain.plan.dto.request.SearchPlaceFromTmapRequestDto;
import com.A605.pijja.domain.plan.dto.request.GetRouteTmapRequestDto;
import com.A605.pijja.domain.plan.dto.response.SearchPlaceFromTmapResponseDto;
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
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/plan")
public class PlanController {
    private final TmapConfig tmapConfig;

    @PostMapping("")
    public List<SearchPlaceFromTmapResponseDto> searchPlaceFromTmap(@RequestBody SearchPlaceFromTmapRequestDto requestDto) throws JsonProcessingException {
        List<SearchPlaceFromTmapResponseDto> responseDto=new ArrayList<>();
        String tmapApiKey=tmapConfig.getTmapApiKey();
        String tmapUrl=tmapConfig.getTmapUrl();
        DefaultUriBuilderFactory factory=new DefaultUriBuilderFactory(tmapUrl);
        factory.setEncodingMode(DefaultUriBuilderFactory.EncodingMode.VALUES_ONLY);

        WebClient wc= WebClient.builder()
                .uriBuilderFactory(factory)
                .baseUrl(tmapUrl)
                .build();

        String encodedPlace=URLEncoder.encode(requestDto.getPlace(),StandardCharsets.UTF_8);
        //tmap api 호출
        ResponseEntity<String> result=wc.get()
                .uri(uriBuilder -> uriBuilder.path("/tmap/pois")
                                .queryParam("searchKeyword",encodedPlace)
                                .queryParam("appKey",tmapApiKey)
                        .build())
                .retrieve()
                .toEntity(String.class)
                .block();

        // JSON 응답 문자열
        String jsonResponse=result.getBody();

        // Jackson ObjectMapper를 사용하여 JSON 파싱
        ObjectMapper objectMapper = new ObjectMapper();
        try{
            JsonNode jsonNode=objectMapper.readTree(jsonResponse);
            JsonNode poiArray=jsonNode.at("/searchPoiInfo/pois/poi");
            int poiSize=poiArray.size();
            for(int i=0;i<poiSize;i++){
                JsonNode nameNode=jsonNode.at("/searchPoiInfo/pois/poi/"+i+"/name");
                JsonNode frontLatNode=jsonNode.at("/searchPoiInfo/pois/poi/"+i+"/frontLat");
                JsonNode frontLonNode=jsonNode.at("/searchPoiInfo/pois/poi/"+i+"/frontLon");
                JsonNode upperAddrNameNode=jsonNode.at("/searchPoiInfo/pois/poi/"+i+"/upperAddrName");
                if(upperAddrNameNode.asText().equals("제주")) {
                    String name = nameNode.asText();
                    float lat = Float.parseFloat(frontLatNode.asText());
                    float lon = Float.parseFloat(frontLonNode.asText());
                    SearchPlaceFromTmapResponseDto response=SearchPlaceFromTmapResponseDto.builder()
                            .name(name)
                            .lat(lat)
                            .lon(lon).build();
                    responseDto.add(response);
                }

            }
            return responseDto;
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }

    @PostMapping("/getroute")
    public ResponseEntity<String> getRouteTmap(@RequestBody GetRouteTmapRequestDto requestDto){
        String tmapApiKey=tmapConfig.getTmapApiKey();
        String tmapUrl=tmapConfig.getTmapUrl();
        DefaultUriBuilderFactory factory=new DefaultUriBuilderFactory(tmapUrl);
        factory.setEncodingMode(DefaultUriBuilderFactory.EncodingMode.VALUES_ONLY);

        WebClient wc= WebClient.builder()
                .uriBuilderFactory(factory)
                .baseUrl(tmapUrl)
                .build();

        ResponseEntity<String> response=wc.post()
                .uri(uriBuilder -> uriBuilder.path("/tmap/routes")
                        .build())
                .header("appKey",tmapApiKey)
                .bodyValue(requestDto)
                .retrieve()
                .toEntity(String.class)
                .block();
        return response;
    }

}
