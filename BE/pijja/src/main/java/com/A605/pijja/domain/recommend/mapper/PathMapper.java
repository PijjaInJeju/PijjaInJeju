package com.A605.pijja.domain.recommend.mapper;

import com.A605.pijja.domain.place.entity.Place;
import com.A605.pijja.domain.plan.dto.response.PathDto;
import com.A605.pijja.domain.recommend.dto.response.RecommendResponseDto;
import com.A605.pijja.domain.recommend.dto.response.travelPathDto;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface PathMapper {
    default PathDto longitudeAndLatitudeToPathDto(float latitude, float longitude){
        return PathDto.builder()
                .latitude(latitude)
                .longitude(longitude)
                .build();
    }

    default
    travelPathDto longitudeAndLatitudeAndPathListToTravelPathDto (float maxLatitude, float minLatitude, float maxLongitude, float minLongitude, List<PathDto> pathList){
        return travelPathDto.builder()
                .maxLatitude(maxLatitude)
                .minLatitude(minLatitude)
                .maxLongitude(maxLongitude)
                .minLongitude(minLongitude)
                .pathList(pathList)
                .build();
    };
    List<RecommendResponseDto> placeToRecommendResponseDto(List<Place> placeList);
}
