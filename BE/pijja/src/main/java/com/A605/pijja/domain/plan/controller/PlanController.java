package com.A605.pijja.domain.plan.controller;

import com.A605.pijja.domain.plan.dto.request.GetRouteTmapRequestDto;
import com.A605.pijja.domain.plan.dto.request.AddRouteRequestDto;
import com.A605.pijja.domain.plan.dto.request.SearchPlaceFromTmapRequestDto;
import com.A605.pijja.domain.plan.dto.request.TmapRequestDto;
import com.A605.pijja.domain.plan.dto.response.GetRouteTmapResponseDto;
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
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/plan")
public class PlanController {
    private final TmapConfig tmapConfig;
    private final PlaceTestService placeTestService;
    private final PathService pathService;

    @PostMapping("test")
    public List<SearchPlaceFromTmapResponseDto> searchPlaceFromTmap2(@RequestBody SearchPlaceFromTmapRequestDto requestDto) throws JsonProcessingException {
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
                JsonNode middleAddrNameNode=jsonNode.at("/searchPoiInfo/pois/poi/"+i+"/middleAddrName");
                JsonNode lowerAddrNameNode=jsonNode.at("/searchPoiInfo/pois/poi/"+i+"/lowerAddrName");
                if(upperAddrNameNode.asText().equals("제주")) {
                    String name = nameNode.asText();
                    float lat = Float.parseFloat(frontLatNode.asText());
                    float lon = Float.parseFloat(frontLonNode.asText());
                    String middleAddr=middleAddrNameNode.asText();
                    String lowerAddr=lowerAddrNameNode.asText();

                    SearchPlaceFromTmapResponseDto response=SearchPlaceFromTmapResponseDto.builder()
                            .name(name)
                            .lat(lat)
                            .lon(lon)
                            .middleAddrName(middleAddr)
                            .lowerAddrName(lowerAddr)
                            .build();
                    responseDto.add(response);
                }

            }
            return responseDto;
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }

    @PostMapping("")
    public SearchPlaceFromTmapResponseDto searchPlaceFromTmap(@RequestBody SearchPlaceFromTmapRequestDto requestDto) throws JsonProcessingException {
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

            String placeName= requestDto.getPlace().replaceAll(" ","");

            String encodedPlace = URLEncoder.encode(placeName, StandardCharsets.UTF_8);
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

    @PostMapping("/getroutetest")
    public ResponseEntity<String> getRouteTmap2(@RequestBody TmapRequestDto requestDto){
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

        System.out.println(response);

        return response;
    }

//    @PostMapping("/getroute")
//    public GetRouteTmapResponseDto getRouteTmap(@RequestBody List<GetRouteTmapRequestDto> requestDto){
//        String tmapApiKey=tmapConfig.getTmapApiKey();
//        String tmapUrl=tmapConfig.getTmapUrl();
//        DefaultUriBuilderFactory factory=new DefaultUriBuilderFactory(tmapUrl);
//        factory.setEncodingMode(DefaultUriBuilderFactory.EncodingMode.VALUES_ONLY);
//
//        GetRouteTmapResponseDto response=pathService.searchRoute(requestDto);
//
//        if(response==null){
//            WebClient wc= WebClient.builder()
//                    .uriBuilderFactory(factory)
//                    .baseUrl(tmapUrl)
//                    .build();
//
//            TmapRequestDto requesstTmapDto= TmapRequestDto.builder()
//                    .endY(requestDto.get(1).getLat())
//                    .endX(requestDto.get(1).getLon())
//                    .startY(requestDto.get(0).getLat())
//                    .startX(requestDto.get(0).getLon()).build();
//            ResponseEntity<String> result=wc.post()
//                .uri(uriBuilder -> uriBuilder.path("/tmap/routes")
//                        .build())
//                .header("appKey",tmapApiKey)
//                .bodyValue(requesstTmapDto)
//                .retrieve()
//                .toEntity(String.class)
//                .block();
//            // JSON 응답 문자열
//            String jsonResponse = result.getBody();
//
//            // Jackson ObjectMapper를 사용하여 JSON 파싱
//            ObjectMapper objectMapper = new ObjectMapper();
//            try {
//                System.out.println("API호출!!!!!!!!!!!!!!!!!!!!!!!!");
//                JsonNode jsonNode = objectMapper.readTree(jsonResponse);
//                JsonNode totalDistance=jsonNode.at("/features/0/properties/totalDistance");
//                JsonNode totalTime=jsonNode.at("/features/0/properties/totalTime");
//
//                AddRouteRequestDto request= AddRouteRequestDto.builder()
//                        .startPlaceId(requestDto.get(0).getId())
//                        .endPlaceId(requestDto.get(1).getId())
//                        .distance(totalDistance.floatValue())
//                        .time(totalTime.floatValue()).build();
//                pathService.addPath(request);
//                response=pathService.searchRoute(requestDto);
//
//            } catch (IOException e) {
//                e.printStackTrace();
//                return null;
//            }
//
//        }
//
//        return response;
//    }


    @PostMapping("/getroute")
    public void getRouteTmap3(@RequestBody List<GetRouteTmapRequestDto> requestDto){

        pathService.combination(requestDto,new int[2],0,0, requestDto.size());

    }


}
