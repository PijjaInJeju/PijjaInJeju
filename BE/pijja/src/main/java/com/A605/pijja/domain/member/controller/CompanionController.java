package com.A605.pijja.domain.member.controller;

import com.A605.pijja.domain.member.dto.CompanionAddDto;
import com.A605.pijja.domain.member.dto.CompanionMemberListDto;
import com.A605.pijja.domain.member.service.CompanionRegistService;
import com.A605.pijja.domain.member.service.CompanionsMemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/companions")
@RequiredArgsConstructor
public class CompanionController {

    private final CompanionRegistService companionRegistService;

    private final CompanionsMemberService companionsMemberService;

    @PostMapping
    public void companionAdd(@RequestBody CompanionAddDto companionAddDto) {
        companionRegistService.registCompanion(companionAddDto);
    }

    @GetMapping("/{companionId}")
    public void companionMemberDetails(@RequestBody CompanionMemberListDto memberCompanionListDto) {
        companionsMemberService.getMemberOfCompanion(memberCompanionListDto);
    }

//    @GetMapping
//    public void getMyCompanions(@RequestBody CompanionMemberListDto memberCompanionListDto) {
//        companionRegistService.getAllMembersCompanion(memberCompanionListDto);
//    }
}
