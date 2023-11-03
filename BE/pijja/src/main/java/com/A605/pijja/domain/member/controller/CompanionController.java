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

    // 그룹 생성 엔드포인트
    @PostMapping
    public ResponseEntity companionAdd(@RequestBody CompanionAddRequestDto companionAddRequestDto) {
        // CompanionRegistService를 사용하여 새로운 여행 그룹을 생성하고 결과를 반환합니다.
        return companionRegistService.registCompanion(companionAddRequestDto);
    }

    // 그룹 멤버 리스트 조회 엔드포인트
    @GetMapping("/{companionId}")
    public ResponseEntity companionMemberDetails(
            @RequestBody CompanionIdRequestDto CompanionIdRequestDto) {
        // CompanionsMemberService를 사용하여 특정 여행 그룹 그룹의 멤버 목록을 조회하고 반환합니다.
        return companionsMemberService.getMemberOfCompanion(CompanionIdRequestDto);
    }

    // 멤버 초대 엔드포인트
    @PostMapping("/invite")
    public ResponseEntity companionMemberInvite(
            @RequestBody CompanionInviteRequestDto CompanionInviteRequestDto) {
        // CompanionInviteService를 사용하여 멤버를 여행 그룹 그룹에 초대하고 결과를 반환합니다.
        return companionInviteService.inviteMember(CompanionInviteRequestDto);
    }

    // 여행 그룹 그룹 가입 엔드포인트
    @PostMapping("/join")
    public ResponseEntity companionMemberJoin(
            @RequestBody CompanionJoinRequestDto companionJoinRequestDto) {
        // CompanionJoinService를 사용하여 여행 그룹 그룹에 가입하고 결과를 반환합니다.
        return companionJoinService.joinCompanion(companionJoinRequestDto);
    }

    // 모든 여행 그룹 그룹 목록 조회 엔드포인트
    @GetMapping
    public ResponseEntity companions() {
        // CompanionListService를 사용하여 모든 여행 그룹 그룹의 목록을 조회하고 반환합니다.
        return companionListService.getAllCompanions();
    }
}
