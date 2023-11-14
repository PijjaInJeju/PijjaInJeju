package com.A605.pijja.domain.plan.controller;

import com.A605.pijja.domain.plan.dto.request.*;
import com.A605.pijja.domain.plan.dto.response.GetRouteResponseDto;
import com.A605.pijja.domain.plan.dto.response.SearchPlaceFromTmapResponseDto;
import com.A605.pijja.domain.plan.service.PathService;
import com.A605.pijja.global.tmap.TmapConfig;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.util.DefaultUriBuilderFactory;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
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
