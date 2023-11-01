package com.A605.pijja.domain.member.controller;

import com.A605.pijja.domain.member.dto.MemberRegistDto;
import com.A605.pijja.domain.member.service.MemberRegistService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/members")
@RequiredArgsConstructor
public class MemberController {

    private final MemberRegistService memberRegistService;

    @PostMapping("sign-up")
    public void memberAdd(MemberRegistDto memberRegistDto) {
        memberRegistService.memberRegist(memberRegistDto);
    }
}
