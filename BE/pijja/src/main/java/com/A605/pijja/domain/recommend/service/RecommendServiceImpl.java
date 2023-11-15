package com.A605.pijja.domain.recommend.service;

import com.A605.pijja.domain.place.entity.Place;
import com.A605.pijja.domain.plan.dto.response.PathDto;
import com.A605.pijja.domain.plan.entity.Path;
import com.A605.pijja.domain.plan.repository.PathRepository;
import com.A605.pijja.domain.recommend.dto.request.RecommendRequestDto;
import com.A605.pijja.domain.recommend.dto.response.RecommendResponseDto;
import com.A605.pijja.domain.recommend.dto.response.travelPathDto;
import com.A605.pijja.domain.recommend.mapper.PathMapper;
import com.A605.pijja.domain.recommend.repository.RecommendRepository;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class RecommendServiceImpl implements RecommendService {
    private final RecommendRepository recommendRepository;
    private final PathRepository pathRepository;
    private final ObjectMapper objectMapper;
    private final PathMapper pathMapper;

    @Override
    public List<RecommendResponseDto> recommendPlace(String tag, String mate) {
        List<Place> placeList = recommendRepository.findRecommendListByTheme(tag, mate);
        List<RecommendResponseDto> recommendResponseDtoList = placeList.stream()
                .map(recommend -> RecommendResponseDto.builder()
                        .id(recommend.getId())
                        .title(recommend.getTitle())
                        .latitude(recommend.getLatitude())
                        .longitude(recommend.getLongitude())
                        .tag(recommend.getTag())
                        .image(recommend.getImage())
                        .build()
                )
                .collect(Collectors.toList());
        return recommendResponseDtoList;
    }




    @Override
    public List<RecommendResponseDto> recommendPlaceDistances(RecommendRequestDto recommendRequestDto) {
        System.out.println("들어옴");
        String tag = recommendRequestDto.getTag();
        String mate = recommendRequestDto.getMate();
        List<Place> candidatesList = calculateDistanceToTravelDestination(recommendRequestDto);
        List<Place> recommendPlaces = recommendRepository.findRecommendListByTheme(tag, mate);

        System.out.println("확인");
        System.out.println(candidatesList.toString());
        return combinationRecommendAndCanditatesList(recommendPlaces, candidatesList);
    }



    @Override
    public List<RecommendResponseDto> combinationRecommendAndCanditatesList(List<Place> placeList,  List<Place> candidatesList) {
        List<Place> filteredPlaces = placeList.stream()
                .filter(candidatesList::contains)
                .collect(Collectors.toList());

        return pathMapper.placeToRecommendResponseDto(filteredPlaces);
    }


    @Override
    public List<Place> calculateDistanceToTravelDestination(RecommendRequestDto recommendRequestDto) {
        float maxLatitude, minLatitude, maxLongtitude, minLongtitude;
        List<Place> candidatesList = new ArrayList<>();
        travelPathDto travelPathDto = findTravelPath(recommendRequestDto);

        maxLatitude = travelPathDto.getMaxLatitude();
        minLatitude = travelPathDto.getMinLatitude();
        maxLongtitude = travelPathDto.getMaxLongitude();
        minLongtitude = travelPathDto.getMinLongitude();

        List<Place> allPlace = recommendRepository.findAll();
        for (Place place : allPlace) {
            if(minLatitude <= place.getLongitude() && place.getLongitude() <= maxLatitude
                    && minLongtitude <= place.getLongitude() && place.getLongitude() <= maxLongtitude){
                candidatesList.add(place);
            }
        }
        return candidatesList;
    }

    //여행지 사이의 경로 list 찾기
    @Override
    public travelPathDto findTravelPath(RecommendRequestDto recommendRequestDto) {
        float maxLatitude = Float.MIN_VALUE;
        float minLatitude = Float.MAX_VALUE;
        float maxLongitude = 0;
        float minLongitude = 0;
        ArrayList<PathDto> pathList=new ArrayList<>();

        System.out.println("쿼리 날리기");
        Path path = pathRepository.findByStartPlaceAndEndPlace(recommendRequestDto.getArrivals_id(), recommendRequestDto.getDepartures_id());

        try {
            JsonNode pathJson = objectMapper.readTree(path.getPath());
            minLongitude = path.getStartPlace().getLongitude().floatValue();
            maxLongitude = path.getEndPlace().getLongitude().floatValue();

            for (int i = 0; i < pathJson.size()-1; i++) {
                float latitude = pathJson.at("/" + i + "/latitude").floatValue();
                float longitude = pathJson.at("/" + i + "/longitude").floatValue();
                pathList.add(pathMapper.longitudeAndLatitudeToPathDto(latitude, longitude));
                maxLatitude = Math.max(latitude, maxLatitude);
                minLatitude = Math.min(longitude, minLatitude);
            }
        } catch (Exception e) {
            // JSON 파싱 오류 처리
        }

        return pathMapper.longitudeAndLatitudeAndPathListToTravelPathDto(maxLatitude,  minLatitude,  maxLongitude,  minLongitude,pathList);
    }

}