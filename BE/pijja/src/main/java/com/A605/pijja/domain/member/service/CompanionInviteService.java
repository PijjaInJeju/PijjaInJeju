package com.A605.pijja.domain.member.service;

import com.A605.pijja.domain.member.dto.FailResponseDto;
import com.A605.pijja.domain.member.dto.SuccessResponseDto;
import com.A605.pijja.domain.member.dto.request.CompanionInviteRequestDto;
import com.A605.pijja.domain.member.entity.Companion;
import com.A605.pijja.domain.member.entity.Member;
import com.A605.pijja.domain.member.entity.MemberCompanion;
import com.A605.pijja.domain.member.entity.Role;
import com.A605.pijja.domain.member.repository.CompanionRepository;
import com.A605.pijja.domain.member.repository.MemberCompanionRepository;
import com.A605.pijja.domain.member.repository.MemberRepository;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class CompanionInviteService {

    private final MemberRepository memberRepository;

    private final CompanionRepository companionRepository;

    private final MemberCompanionRepository memberCompanionRepository;

    public ResponseEntity inviteMember(CompanionInviteRequestDto companionInviteRequestDto) {
        Optional<Member> memberOptional = memberRepository.findMemberByEmail(
                companionInviteRequestDto.getEmail());
        Optional<Companion> companionOptional = companionRepository.findById(
                companionInviteRequestDto.getCompanionId());

        Member member = memberOptional.get();
        Companion companion = companionOptional.get();

        String code = companion.getCode();

        if (isLeader(member, companion)) {
            return ResponseEntity.ok()
                    .body(new SuccessResponseDto(true, "그룹 초대 코드를 보냅니다.", code));
        } else {
            return ResponseEntity.ok()
                    .body(new FailResponseDto(false, "초대 권한이 없습니다.", 401));
        }
    }

    private boolean isLeader(Member member, Companion companion) {
        MemberCompanion memberCompanion = memberCompanionRepository.findByMemberAndCompanion(member,
                companion);

        return memberCompanion.getRole() == Role.LEARDER;
    }
}
