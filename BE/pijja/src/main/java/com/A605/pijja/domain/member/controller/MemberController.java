package com.A605.pijja.domain.member.controller;

import com.A605.pijja.domain.member.dto.request.MemberRegistRequestDto;
import com.A605.pijja.domain.member.service.MemberRegistService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/members")
@RequiredArgsConstructor
public class MemberController {

    private final MemberRegistService memberRegistService;

    // 회원 가입 엔드포인트
    @PostMapping("sign-up")
    public ResponseEntity memberAdd(MemberRegistRequestDto memberRegistRequestDto) {
        // MemberRegistService를 사용하여 새로운 회원을 가입시키고 결과를 반환합니다.
        return memberRegistService.registMember(memberRegistRequestDto);
    }
}