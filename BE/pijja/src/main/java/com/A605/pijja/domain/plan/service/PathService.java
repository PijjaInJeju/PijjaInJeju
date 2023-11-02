package com.A605.pijja.domain.plan.service;

import com.A605.pijja.domain.plan.dto.request.GetRouteTmapRequestDto;
import com.A605.pijja.domain.plan.dto.request.GetRouteTmapRequestDto2;
import com.A605.pijja.domain.plan.dto.response.GetRouteTmapResponseDto;

import java.util.List;

public interface PathService {

    GetRouteTmapResponseDto searchRoute(List<GetRouteTmapRequestDto> placeId);
    void addPath(GetRouteTmapRequestDto2 requestDto);
}
