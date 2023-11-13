package com.A605.pijja.domain.member.controller;

import com.A605.pijja.domain.member.dto.request.TendencyAddDto;
import com.A605.pijja.domain.member.service.TendencyAddService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/tendencies")
@RequiredArgsConstructor
public class TendencyController {
    private final TendencyAddService tendencyAddService;

    @PostMapping
    public ResponseEntity tendencyAdd(@RequestBody TendencyAddDto tendencyAddDto) {
        return tendencyAddService.addTendency(tendencyAddDto);
    }
}
