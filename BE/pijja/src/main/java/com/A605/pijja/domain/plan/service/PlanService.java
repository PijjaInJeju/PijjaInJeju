package com.A605.pijja.domain.plan.service;

import com.A605.pijja.domain.plan.dto.request.KruskalRequestDto;
import com.A605.pijja.domain.plan.dto.request.MakePlanRequestDto;
import com.A605.pijja.domain.plan.dto.response.MakePlanResonseDto;
import com.A605.pijja.domain.plan.dto.response.PlanGroupingResponseDto;
import com.fasterxml.jackson.core.JsonProcessingException;

import java.util.List;
import java.util.PriorityQueue;

public interface PlanService {
    List<PlanGroupingResponseDto> planGrouping(MakePlanRequestDto requestDto);
    void combinationPlan(List<MakePlanRequestDto.PlaceDto> requestDto, int[] result, int cnt, int start);
    MakePlanResonseDto makePlan(MakePlanRequestDto requestDto) throws JsonProcessingException;
}
