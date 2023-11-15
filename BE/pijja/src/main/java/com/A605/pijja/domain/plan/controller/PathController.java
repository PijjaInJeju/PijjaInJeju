package com.A605.pijja.domain.plan.controller;

import com.A605.pijja.domain.plan.dto.request.*;
import com.A605.pijja.domain.plan.dto.response.GetRouteResponseDto;
import com.A605.pijja.domain.plan.service.PathService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.PriorityQueue;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/path")
public class PathController {
    private final PathService pathService;

    @PostMapping("/getroute")
    public GetRouteResponseDto getRoute(@RequestBody List<GetRouteTmapRequestDto> requestDto){
        PriorityQueue<KruskalRequestDto> pq=pathService.combination(requestDto,new int[2],0,0, requestDto.size(),new PriorityQueue<>());
        return pathService.kruskal(pq,requestDto);
    }

}
