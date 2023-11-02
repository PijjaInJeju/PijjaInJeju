package com.A605.pijja.domain.recommend.controller;

import com.A605.pijja.domain.recommend.dto.response.RecommendResponseDto;
import com.A605.pijja.domain.recommend.service.RecommendService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/recommends")
public class RecommendController {
    private final RecommendService recommendService;

    @GetMapping("/{tag}&{mate}")
    public List<RecommendResponseDto> recommendPlaces(@PathVariable String tag, @PathVariable String mate){
        return recommendService.recommendPlace(tag, mate);
    }
}
