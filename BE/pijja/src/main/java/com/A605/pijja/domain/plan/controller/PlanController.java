package com.A605.pijja.domain.plan.controller;

import com.A605.pijja.domain.plan.dto.request.AddRecommendPlaceRequestDto;
import com.A605.pijja.domain.plan.dto.request.ListRecommendPlacesRequestDto;
import com.A605.pijja.domain.plan.dto.request.MakePlanRequestDto;
import com.A605.pijja.domain.plan.dto.request.PlanListRequestDto;
import com.A605.pijja.domain.plan.dto.response.MakePlanResonseDto;
import com.A605.pijja.domain.plan.dto.response.PlanGroupingResponseDto;
import com.A605.pijja.domain.plan.dto.response.PlanListResponseDto;
import com.A605.pijja.domain.plan.service.PlanService;
import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/plan")
public class PlanController {
    private final PlanService planService;

    @PostMapping("")
    public MakePlanResonseDto makePlan(@RequestBody MakePlanRequestDto requestDto) throws JsonProcessingException {
        return planService.makePlan(requestDto);
    }

    @PostMapping("/listRecommendPlaces") //추천 리스트로. (firstPlace랑 secondPlace 주면)
    public void listRecommendPlaces(@RequestBody ListRecommendPlacesRequestDto requestDto){

    }

    @PostMapping("/list")
    public List<PlanListResponseDto> planList(@RequestBody PlanListRequestDto requestDto){
        return planService.planList(requestDto);
    }

    @PostMapping("/grouping")
    public List<PlanGroupingResponseDto> grouping(@RequestBody MakePlanRequestDto requestDto) throws JsonProcessingException {
        return planService.planGrouping(requestDto);
    }

    @PostMapping("/addRecommendPlace")
    public MakePlanResonseDto addRecommendPlace(@RequestBody AddRecommendPlaceRequestDto requestDto){
        return planService.addRecommendPlace(requestDto);
    }

    @PostMapping("/completeMakePlan")
    public void completeMakePlan(){

    }


}
