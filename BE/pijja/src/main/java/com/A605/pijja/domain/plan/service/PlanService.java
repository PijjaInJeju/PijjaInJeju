package com.A605.pijja.domain.plan.service;

import com.A605.pijja.domain.plan.dto.request.MakePlanRequestDto;

import java.util.List;

public interface PlanService {
    void planGrouping(MakePlanRequestDto requestDto);
    void combinationPlan(List<MakePlanRequestDto.PlaceDto> requestDto, int[] result, int cnt, int start);
    void makePlan(MakePlanRequestDto requestDto);
}
