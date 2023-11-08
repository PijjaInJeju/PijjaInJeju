package com.A605.pijja.domain.plan.service;

import com.A605.pijja.domain.plan.dto.request.SearchPlaceFromTmapRequestDto;
import com.A605.pijja.domain.plan.dto.response.SearchPlaceFromTmapResponseDto;
import com.A605.pijja.domain.plan.entity.PlaceTest;

public interface PlaceTestService {
    boolean isPlace(SearchPlaceFromTmapRequestDto requestDto);
    void addPlace(SearchPlaceFromTmapResponseDto requestDto);

    PlaceTest searchPlace(String name);

}
