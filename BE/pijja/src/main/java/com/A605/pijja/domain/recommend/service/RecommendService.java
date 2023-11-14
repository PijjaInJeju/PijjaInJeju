package com.A605.pijja.domain.recommend.service;

import com.A605.pijja.domain.place.entity.Place;
import com.A605.pijja.domain.plan.dto.response.PathDto;
import com.A605.pijja.domain.recommend.dto.request.RecommendRequestDto;
import com.A605.pijja.domain.recommend.dto.response.RecommendResponseDto;

import java.util.List;

public interface RecommendService {
    List<Place> calculateDistanceToTravelDestination(RecommendRequestDto recommendRequestDto);

    List<RecommendResponseDto> recommendPlace(String tag, String mate, RecommendRequestDto recommendRequestDto);
    List<PathDto> findTravelPath(RecommendRequestDto recommendRequestDto);
    }
