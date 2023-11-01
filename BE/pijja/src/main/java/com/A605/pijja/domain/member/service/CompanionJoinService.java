package com.A605.pijja.domain.member.service;

import com.A605.pijja.domain.member.dto.SuccessResponseDto;
import com.A605.pijja.domain.member.dto.request.CompanionJoinRequestDto;
import com.A605.pijja.domain.member.entity.Companion;
import com.A605.pijja.domain.member.entity.Member;
import com.A605.pijja.domain.member.entity.MemberCompanion;
import com.A605.pijja.domain.member.entity.Role;
import com.A605.pijja.domain.member.repository.CompanionRepository;
import com.A605.pijja.domain.member.repository.MemberRepository;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class CompanionJoinService {

    private final MemberRepository memberRepository;

    private final CompanionRepository companionRepository;

    public ResponseEntity joinCompanion(CompanionJoinRequestDto companionJoinRequestDto) {
        Optional<Member> memberOptional = memberRepository.findMemberByEmail(
                companionJoinRequestDto.getEmail());

        Member member = memberOptional.get();

        Optional<Companion> companionOptional = companionRepository.findByCode(
                companionJoinRequestDto.getCode());

        Companion companion = companionOptional.get();

        MemberCompanion memberCompanion = MemberCompanion.builder()
                .member(member)
                .companion(companion)
                .role(Role.TEAMMEMBER)
                .build();

        companion.getCompanionMembers().add(memberCompanion);
        companionRepository.save(companion);

        return ResponseEntity.ok()
                .body(new SuccessResponseDto(true, "그룹에 참여되었습니다.", memberCompanion));
    }
}
