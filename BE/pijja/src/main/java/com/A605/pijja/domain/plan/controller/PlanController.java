package com.A605.pijja.domain.plan.controller;

import com.A605.pijja.domain.plan.dto.request.MakePlanRequestDto;
import com.A605.pijja.domain.plan.service.PlanService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/plan")
public class PlanController {
    private final PlanService planService;
    @PostMapping("/daygrouping")
    public void dayGrouping(@RequestBody MakePlanRequestDto requestDto){
        planService.planGrouping(requestDto);
    }

    @PostMapping("")
    public void makePlan(@RequestBody MakePlanRequestDto requestDto){
        planService.makePlan(requestDto);
    }
}
