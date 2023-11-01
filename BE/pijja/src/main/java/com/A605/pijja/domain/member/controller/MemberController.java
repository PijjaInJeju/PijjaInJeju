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

    // 카카오 회원 등록
    @PostMapping("sign-up")
    public ResponseEntity memberAdd(MemberRegistRequestDto memberRegistRequestDto) {
        return memberRegistService.registMember(memberRegistRequestDto);
    }
}
