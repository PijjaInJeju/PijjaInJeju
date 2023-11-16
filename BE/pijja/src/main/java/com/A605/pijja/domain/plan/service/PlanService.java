package com.A605.pijja.domain.plan.service;

import com.A605.pijja.domain.plan.dto.request.*;
import com.A605.pijja.domain.plan.dto.response.CompleteMakePlanResonseDto;
import com.A605.pijja.domain.plan.dto.response.MakePlanResonseDto;
import com.A605.pijja.domain.plan.dto.response.PlanGroupingResponseDto;
import com.A605.pijja.domain.plan.dto.response.PlanListResponseDto;
import com.fasterxml.jackson.core.JsonProcessingException;

import java.util.List;

public interface PlanService {
    List<PlanGroupingResponseDto> planGrouping(MakePlanRequestDto requestDto);
    void combinationPlan(List<MakePlanRequestDto.PlaceDto> requestDto, int[] result, int cnt, int start);
    MakePlanResonseDto makePlan(MakePlanRequestDto requestDto) throws JsonProcessingException;
    CompleteMakePlanResonseDto completeMakePlan(CompleteMakePlanRequestDto requestDto) throws JsonProcessingException;

    MakePlanResonseDto addRecommendPlace(AddRecommendPlaceRequestDto requestDto);

    List<PlanListResponseDto> planList(PlanListRequestDto requestDto);

    CompleteMakePlanResonseDto planDetail(PlanDetailRequestDto requestDto);
}
