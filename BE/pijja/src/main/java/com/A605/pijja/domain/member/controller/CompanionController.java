package com.A605.pijja.domain.member.controller;

import com.A605.pijja.domain.member.dto.MemberCompanionListDto;
import com.A605.pijja.domain.member.dto.CompanionRegistDto;
import com.A605.pijja.domain.member.service.CompanionService;
import com.A605.pijja.domain.member.service.MemberCompanionService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/companions")
@RequiredArgsConstructor
public class CompanionController {

    private final CompanionService companionService;

    private final MemberCompanionService memberCompanionService;

    @PostMapping
    public void saveCompanion(@RequestBody CompanionRegistDto companionRegistDto, Long memberId) {
        companionService.registCompanion(companionRegistDto, memberId);
    }

    @GetMapping("/{companionId}")
    public void getMemberOfCompanion(@RequestBody MemberCompanionListDto memberCompanionListDto) {
        memberCompanionService.getMemberOfCompanion(memberCompanionListDto);
    }
}
