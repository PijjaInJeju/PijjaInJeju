package com.A605.pijja.domain.recommend.service;

import com.A605.pijja.domain.place.entity.Place;
import com.A605.pijja.domain.plan.entity.Path;
import com.A605.pijja.domain.plan.repository.PathRepository;
import com.A605.pijja.domain.recommend.dto.request.RecommendRequestDto;
import com.A605.pijja.domain.recommend.dto.response.RecommendResponseDto;
import com.A605.pijja.domain.recommend.mapper.PathMapper;
import com.A605.pijja.domain.recommend.repository.RecommendRepository;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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
        String tag = recommendRequestDto.getTag();
        String mate = recommendRequestDto.getMate();

        List<Place> candidatesList = calculateDistanceToTravelDestination(recommendRequestDto);
        List<Place> recommendPlaces = recommendRepository.findRecommendListByTheme(tag, mate);

        return combinationRecommendAndCanditatesList(recommendPlaces, candidatesList);
    }

    @Override
    public List<Place> calculateDistanceToTravelDestination(RecommendRequestDto recommendRequestDto) {
        float maxLatitude, minLatitude, maxLongtitude, minLongtitude;
        List<Place> candidatesList = new ArrayList<>();
        float[] travelPathDto = findTravelPath(recommendRequestDto);

        minLatitude = travelPathDto[0];
        maxLatitude = travelPathDto[1];
        minLongtitude = travelPathDto[2];
        maxLongtitude = travelPathDto[3];

        System.out.println("여기?");
        List<Place> allPlace = recommendRepository.findAll();
        System.out.println("맞니?");
        for (Place place : allPlace) {
            if(minLongtitude <= place.getLongitude() && place.getLongitude() <= maxLongtitude
                    && minLatitude <= place.getLatitude() && place.getLatitude() <= maxLatitude){
                candidatesList.add(place);
            }
        }
        return candidatesList;
    }

    //여행지 사이의 경로 list 찾기
    @Override
    public float[] findTravelPath(RecommendRequestDto recommendRequestDto) {
        float[] pathRange = new float[4];

        //Latitude
        pathRange[0] = Float.MAX_VALUE;
        pathRange[1] = Float.MIN_VALUE;
        //Longitude
        pathRange[2] = 0;
        pathRange[3] = 0;

        Path path = pathRepository.findByStartPlaceAndEndPlace(recommendRequestDto.getDepartures_id(), recommendRequestDto.getArrivals_id());
        try {
            JsonNode pathJson = objectMapper.readTree(path.getPath());
            //Longitude
            pathRange[2] = path.getEndPlace().getLongitude().floatValue();
            pathRange[3] = path.getStartPlace().getLongitude().floatValue();
            if(pathRange[2] > pathRange[3]){
                float tmp = pathRange[3];
                pathRange[3] = pathRange[2];
                pathRange[2] = tmp;
            }

            for (int i = 0; i < pathJson.size()-1; i++) {
                float latitude = pathJson.at("/" + i + "/latitude").floatValue();
                pathRange[1] = Math.max(latitude, pathRange[1]);
                pathRange[0] = Math.min(latitude, pathRange[0]);
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
            // JSON 파싱 오류 처리
        }

        return pathRange;
    }
    @Override
    public List<RecommendResponseDto> combinationRecommendAndCanditatesList(List<Place> placeList,  List<Place> candidatesList) {
        List<Place> filteredPlaces = placeList.stream()
                .filter(candidatesList::contains)
                .collect(Collectors.toList());

        return pathMapper.placeToRecommendResponseDto(filteredPlaces);
    }

}