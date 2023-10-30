package com.A605.pijja.domain.plan.controller;

import com.A605.pijja.domain.plan.dto.request.GetPositionInfoFromTmapReqeustDto;
import com.A605.pijja.domain.plan.dto.response.GetPositionInfoFromTmapResponseDto;
import com.A605.pijja.global.tmap.TmapConfig;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
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

    @GetMapping("")
    public List<GetPositionInfoFromTmapResponseDto> getPositionInfoFromTmap(@RequestBody List<GetPositionInfoFromTmapReqeustDto> requestDto) throws JsonProcessingException {
        String tmapApiKey=tmapConfig.getTmapApiKey();
        String tmapUrl=tmapConfig.getTmapUrl();
        DefaultUriBuilderFactory factory=new DefaultUriBuilderFactory(tmapUrl);
        factory.setEncodingMode(DefaultUriBuilderFactory.EncodingMode.VALUES_ONLY);

        WebClient wc= WebClient.builder()
                .uriBuilderFactory(factory)
                .baseUrl(tmapUrl)
                .build();
//        String encodedPlace = URLEncoder.encode(requestDto.getPlaces().get(0), StandardCharsets.UTF_8);
        List<String> encodedPlaces=new ArrayList<>();
        for(int i=0;i<requestDto.size();i++){
            encodedPlaces.add(URLEncoder.encode(requestDto.get(i).getPlace(),StandardCharsets.UTF_8));
        }
        List<ResponseEntity<String>> resultList=new ArrayList<>();
        for(int i=0;i<encodedPlaces.size();i++){
            final int index = i;
            resultList.add(wc.get()
                    .uri(uriBuilder -> uriBuilder.path("/tmap/pois")
                            .queryParam("searchKeyword",encodedPlaces.get(index))
                            .queryParam("appKey",tmapApiKey)
                            .build())
                    .retrieve()
                    .toEntity(String.class)
                    .block());
        }
//        ResponseEntity<String> result=wc.get()
//                .uri(uriBuilder -> uriBuilder.path("/tmap/pois")
//                        .queryParam("searchKeyword",encodedPlace)
//                        .queryParam("appKey",tmapApiKey)
//                        .build())
//                .retrieve()
//                .toEntity(String.class)
//                .block();

        // JSON 응답 문자열
        List<String> jsonResponseList=new ArrayList<>();
        for(int i=0;i<resultList.size();i++){
            jsonResponseList.add(resultList.get(i).getBody());
        }
//        String jsonResponse = result.getBody();

        // Jackson ObjectMapper를 사용하여 JSON 파싱
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            ArrayList<String> nameList=new ArrayList<>();
            ArrayList<String> latList=new ArrayList<>();
            ArrayList<String> lonList=new ArrayList<>();

            for(int i=0;i<jsonResponseList.size();i++){
                JsonNode jsonNode=objectMapper.readTree(jsonResponseList.get(i));
                JsonNode nameNode=jsonNode.at("/searchPoiInfo/pois/poi/0/name");
                JsonNode frontLatNode = jsonNode.at("/searchPoiInfo/pois/poi/0/frontLat");
                JsonNode frontLonNode =jsonNode.at("/searchPoiInfo/pois/poi/0/frontLon");
                nameList.add(nameNode.asText());
                latList.add(frontLatNode.asText());
                lonList.add(frontLonNode.asText());
            }
            List<GetPositionInfoFromTmapResponseDto> responseList=new ArrayList<>();
            for(int i=0;i<nameList.size();i++){
                responseList.add(GetPositionInfoFromTmapResponseDto.builder()
                        .name(nameList.get(i))
                        .lat(latList.get(i))
                        .lon(lonList.get(i)).build());
            }
            return responseList;
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }
}
