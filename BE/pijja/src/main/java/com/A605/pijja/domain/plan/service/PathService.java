package com.A605.pijja.domain.plan.service;

import com.A605.pijja.domain.plan.dto.request.*;
import com.A605.pijja.domain.plan.dto.response.GetRouteResponseDto;
import com.A605.pijja.domain.plan.dto.response.GetRouteTmapResponseDto;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.PriorityQueue;

public interface PathService {

    GetRouteTmapResponseDto searchRoute(Long startPlaceId,Long endPlaceId);
    void addPath(AddRouteRequestDto requestDto);
    void tmap(TmapRequestDto requestDto);
    PriorityQueue<KruskalRequestDto> combination(List<GetRouteTmapRequestDto> request, int[] result, int start, int cnt, int size,PriorityQueue<KruskalRequestDto> pq);

    GetRouteResponseDto kruskal(PriorityQueue<KruskalRequestDto> pq, List<GetRouteTmapRequestDto> requestDto);
    ResponseEntity<String> getRouteViaTmap(GetRouteViaTmapRequestDto requestDto);


    void test(Long id);
}
