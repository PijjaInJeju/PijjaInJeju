package com.A605.pijja.domain.plan.service;

import com.A605.pijja.domain.plan.dto.request.GetRouteTmapRequestDto;
import com.A605.pijja.domain.plan.dto.request.GetRouteTmapRequestDto2;
import com.A605.pijja.domain.plan.dto.response.CombinationListResponseDto;
import com.A605.pijja.domain.plan.dto.response.GetRouteTmapResponseDto;
import com.A605.pijja.domain.plan.entity.PlaceTest;

import java.util.List;

public interface PathService {

    GetRouteTmapResponseDto searchRoute(List<GetRouteTmapRequestDto> placeId);
    void addPath(GetRouteTmapRequestDto2 requestDto);

    void combination(int[] result,int start, int cnt,int size);
}
