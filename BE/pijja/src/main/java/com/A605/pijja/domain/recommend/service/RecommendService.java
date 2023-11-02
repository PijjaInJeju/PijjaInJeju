package com.A605.pijja.domain.recommend.service;

import com.A605.pijja.domain.recommend.dto.response.RecommendResponseDto;

import java.util.List;

public interface RecommendService {

    List<RecommendResponseDto> recommendPlace(String tag, String mate);
}
