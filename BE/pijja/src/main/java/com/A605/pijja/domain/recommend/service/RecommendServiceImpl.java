package com.A605.pijja.domain.recommend.service;

import com.A605.pijja.domain.place.entity.Place;
import com.A605.pijja.domain.plan.dto.response.PathDto;
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
    public List<RecommendResponseDto> recommendPlace(String tag, String mate, RecommendRequestDto recommendRequestDto) {

        calculateDistanceToTravelDestination(recommendRequestDto);
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
    public List<Place> calculateDistanceToTravelDestination(RecommendRequestDto recommendRequestDto) {
        float maxLatitude, minLatitude, maxLongtitude, minLongtitude;
        Path path = pathRepository.findByStartPlaceAndEndPlace(recommendRequestDto.getArrivals_id(), recommendRequestDto.getDepartures_id());



        return null;
    }

    public void findMaxAndMinLatitudeLongitude(){}
    //여행지 사이의 경로 list 찾기
    @Override
    public List<PathDto> findTravelPath(RecommendRequestDto recommendRequestDto) {
        float maxLatitude = Float.MIN_VALUE;
        float minLatitude = Float.MAX_VALUE;
        float maxLongitude, minLongitude;
        ArrayList<PathDto> pathList=new ArrayList<>();

        Path path = pathRepository.findByStartPlaceAndEndPlace(recommendRequestDto.getArrivals_id(), recommendRequestDto.getDepartures_id());

        try {
            JsonNode pathJson = objectMapper.readTree(path.getPath());
            minLongitude = path.getStartPlace().getLongitude().floatValue();
            maxLongitude = path.getEndPlace().getLongitude().floatValue();

            for (int i = 0; i < pathJson.size()-1; i--) {
                float latitude = pathJson.at("/" + i + "/latitude").floatValue();
                float longitude = pathJson.at("/" + i + "/longitude").floatValue();
                pathList.add(pathMapper.longitudeAndLatitudeToPathDto(latitude, longitude));
                maxLatitude = Math.max(pathList.get(i).getLatitude(), maxLatitude);
                minLatitude = Math.min(pathList.get(i).getLatitude(), minLatitude);
            }
        } catch (Exception e) {
            // JSON 파싱 오류 처리
        }
        return pathList;
    }

}