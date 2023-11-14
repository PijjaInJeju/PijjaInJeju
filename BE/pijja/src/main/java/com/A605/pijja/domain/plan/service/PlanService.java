package com.A605.pijja.domain.plan.service;

import com.A605.pijja.domain.plan.dto.request.ListRecommendPlacesRequestDto;
import com.A605.pijja.domain.plan.dto.request.MakePlanRequestDto;
import com.A605.pijja.domain.plan.dto.request.PlanListRequestDto;
import com.A605.pijja.domain.plan.dto.response.MakePlanResonseDto;
import com.A605.pijja.domain.plan.dto.response.PlanGroupingResponseDto;
import com.A605.pijja.domain.plan.dto.response.PlanListResponseDto;
import com.fasterxml.jackson.core.JsonProcessingException;

import java.util.List;

public interface PlanService {
    List<PlanGroupingResponseDto> planGrouping(MakePlanRequestDto requestDto);
    void combinationPlan(List<MakePlanRequestDto.PlaceDto> requestDto, int[] result, int cnt, int start);
    MakePlanResonseDto makePlan(MakePlanRequestDto requestDto) throws JsonProcessingException;

    void AddRecommendPlace(ListRecommendPlacesRequestDto requestDto);

    List<PlanListResponseDto> planList(PlanListRequestDto requestDto);
}
