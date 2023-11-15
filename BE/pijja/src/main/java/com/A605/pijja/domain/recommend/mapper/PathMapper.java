package com.A605.pijja.domain.recommend.mapper;

import com.A605.pijja.domain.place.entity.Place;
import com.A605.pijja.domain.recommend.dto.response.RecommendResponseDto;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface PathMapper {
    List<RecommendResponseDto> placeToRecommendResponseDto(List<Place> placeList);
}
