package com.A605.pijja.domain.plan.service;

import com.A605.pijja.domain.plan.dto.request.DayGroupingRequestDto;
import com.A605.pijja.domain.plan.dto.request.GetRouteTmapRequestDto;

import java.util.List;

public interface PlanService {
    void planGrouping(DayGroupingRequestDto requestDto);
    void combinationPlan(List<DayGroupingRequestDto.PlaceDto> requestDto, int[] result, int cnt, int start);
}
