package com.A605.pijja.domain.member.controller;

import com.A605.pijja.domain.member.dto.request.CompanionAddRequestDto;
import com.A605.pijja.domain.member.dto.request.CompanionIdRequestDto;
import com.A605.pijja.domain.member.dto.request.CompanionInviteRequestDto;
import com.A605.pijja.domain.member.dto.request.CompanionJoinRequestDto;
import com.A605.pijja.domain.member.service.CompanionInviteService;
import com.A605.pijja.domain.member.service.CompanionJoinService;
import com.A605.pijja.domain.member.service.CompanionListService;
import com.A605.pijja.domain.member.service.CompanionRegistService;
import com.A605.pijja.domain.member.service.CompanionsMemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
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

    private final CompanionInviteService companionInviteService;

    private final CompanionJoinService companionJoinService;

    private final CompanionListService companionListService;

    //그룹 만들기
    @PostMapping
    public ResponseEntity companionAdd(@RequestBody CompanionAddRequestDto companionAddRequestDto) {
        return companionRegistService.registCompanion(companionAddRequestDto);
    }

    // 그룹 멤버 리스트
    @GetMapping("/{companionId}")
    public ResponseEntity companionMemberDetails(
            @RequestBody CompanionIdRequestDto CompanionIdRequestDto) {
        return companionsMemberService.getMemberOfCompanion(CompanionIdRequestDto);
    }

    @PostMapping("/invite")
    public ResponseEntity companionMemberInvite(
            @RequestBody CompanionInviteRequestDto CompanionInviteRequestDto) {
        return companionInviteService.inviteMember(CompanionInviteRequestDto);
    }

    @PostMapping("/join")
    public ResponseEntity companionMemberJoin(
            @RequestBody CompanionJoinRequestDto companionJoinRequestDto) {
        return companionJoinService.joinCompanion(companionJoinRequestDto);
    }

    @GetMapping
    public ResponseEntity companions() {
        return companionListService.getAllCompanions();
    }
}
