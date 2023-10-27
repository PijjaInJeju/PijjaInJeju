package com.A605.pijja.domain.member.controller;

import com.A605.pijja.domain.member.dto.CompanionDto;
import com.A605.pijja.domain.member.service.CompanionService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/companions")
@RequiredArgsConstructor
public class CompanionController {
    private final CompanionService companionService;

    @PostMapping
    public void saveCompanion(@RequestBody CompanionDto companionDto) {
        companionService.saveCompanion(companionDto);
    }

}
