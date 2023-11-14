package com.A605.pijja.domain.recommend.controller;

import com.A605.pijja.domain.recommend.dto.request.RecommendRequestDto;
import com.A605.pijja.domain.recommend.dto.response.RecommendResponseDto;
import com.A605.pijja.domain.recommend.service.RecommendService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/recommends")
public class RecommendController {
    private final RecommendService recommendService;

    @GetMapping("/{tag}/{mate}")
    public List<RecommendResponseDto> recommendPlaces(@PathVariable String tag, @PathVariable String mate, @RequestBody RecommendRequestDto recommendRequestDto){
        return recommendService.recommendPlace(tag, mate, recommendRequestDto);
    }

}
