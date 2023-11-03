package com.A605.pijja.domain.plan.service;

import com.A605.pijja.domain.plan.dto.request.GetRouteTmapRequestDto;
import com.A605.pijja.domain.plan.dto.request.AddRouteRequestDto;
import com.A605.pijja.domain.plan.dto.response.GetRouteTmapResponseDto;

import java.util.List;

public interface PathService {

    GetRouteTmapResponseDto searchRoute(Long startPlaceId,Long endPlaceId);
    void addPath(AddRouteRequestDto requestDto);

    void combination(List<GetRouteTmapRequestDto> request,int[] result,int start, int cnt,int size);



}
