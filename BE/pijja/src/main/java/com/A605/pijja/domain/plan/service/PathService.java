package com.A605.pijja.domain.plan.service;

import com.A605.pijja.domain.plan.dto.request.GetRouteTmapRequestDto;
import com.A605.pijja.domain.plan.dto.response.GetRouteTmapResponseDto;
import com.A605.pijja.domain.plan.entity.PlaceTest;

import java.util.List;

public interface PathService {

    GetRouteTmapResponseDto searchRoute(List<Long> placeId);
    void addPath(GetRouteTmapRequestDto requestDto);
}
