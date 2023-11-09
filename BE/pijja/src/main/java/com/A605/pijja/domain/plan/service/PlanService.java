package com.A605.pijja.domain.plan.service;

import com.A605.pijja.domain.plan.dto.request.MakePlanRequestDto;
import com.A605.pijja.domain.plan.dto.response.MakePlanResonseDto;
import com.A605.pijja.domain.plan.dto.response.PlanGroupingResponseDto;

import java.util.List;

public interface PlanService {
    List<PlanGroupingResponseDto> planGrouping(MakePlanRequestDto requestDto);
    void combinationPlan(List<MakePlanRequestDto.PlaceDto> requestDto, int[] result, int cnt, int start);
    List<MakePlanResonseDto> makePlan(MakePlanRequestDto requestDto);
}
