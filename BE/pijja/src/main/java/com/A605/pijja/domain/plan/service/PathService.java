package com.A605.pijja.domain.plan.service;

import com.A605.pijja.domain.plan.dto.response.GetRouteTmapResponseDto;
import com.A605.pijja.domain.plan.entity.PlaceTest;

import java.util.List;

public interface PathService {

    GetRouteTmapResponseDto searchRoute(List<PlaceTest> request);
    void addPath(List<Long> requestDto);
}
