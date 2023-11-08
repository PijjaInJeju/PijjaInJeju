package com.A605.pijja.domain.plan.controller;

import com.A605.pijja.domain.plan.dto.request.DayGroupingRequestDto;
import com.A605.pijja.domain.plan.service.PathService;
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
    private final PathService pathService;
    @PostMapping("/daygrouping")
    public void dayGrouping(@RequestBody DayGroupingRequestDto requestDto){
        planService.planGrouping(requestDto);
    }
}
