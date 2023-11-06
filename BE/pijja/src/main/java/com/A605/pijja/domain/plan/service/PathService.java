package com.A605.pijja.domain.plan.service;

import com.A605.pijja.domain.plan.dto.request.GetRouteTmapRequestDto;
import com.A605.pijja.domain.plan.dto.request.AddRouteRequestDto;
import com.A605.pijja.domain.plan.dto.request.GetRouteViaTmapRequestDto;
import com.A605.pijja.domain.plan.dto.request.KruskalRequestDto;
import com.A605.pijja.domain.plan.dto.response.GetRouteTmapResponseDto;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.PriorityQueue;

public interface PathService {

    GetRouteTmapResponseDto searchRoute(Long startPlaceId,Long endPlaceId);
    void addPath(AddRouteRequestDto requestDto);

    PriorityQueue<KruskalRequestDto> combination(List<GetRouteTmapRequestDto> request, int[] result, int start, int cnt, int size,PriorityQueue<KruskalRequestDto> pq);

    int kruskal(List<GetRouteTmapRequestDto> request);
    ResponseEntity<String> getRouteViaTmap(GetRouteViaTmapRequestDto requestDto);

}
