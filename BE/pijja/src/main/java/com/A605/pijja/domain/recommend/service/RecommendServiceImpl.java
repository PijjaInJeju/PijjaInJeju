package com.A605.pijja.domain.recommend.service;

import com.A605.pijja.domain.place.entity.Place;
import com.A605.pijja.domain.recommend.dto.response.RecommendResponseDto;
import com.A605.pijja.domain.recommend.repository.RecommendRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class RecommendServiceImpl implements RecommendService {
    private final RecommendRepository recommendRepository;
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
}
