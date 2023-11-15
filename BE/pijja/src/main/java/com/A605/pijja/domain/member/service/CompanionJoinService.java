package com.A605.pijja.domain.member.service;

import com.A605.pijja.domain.member.dto.FailResponseDto;
import com.A605.pijja.domain.member.dto.SuccessResponseDto;
import com.A605.pijja.domain.member.dto.request.CompanionJoinRequestDto;
import com.A605.pijja.domain.member.dto.response.CompanionJoinDto;
import com.A605.pijja.domain.member.entity.Companion;
import com.A605.pijja.domain.member.entity.Member;
import com.A605.pijja.domain.member.entity.MemberCompanion;
import com.A605.pijja.domain.member.entity.Role;
import com.A605.pijja.domain.member.repository.CompanionRepository;
import com.A605.pijja.domain.member.repository.MemberCompanionRepository;
import com.A605.pijja.domain.member.repository.MemberRepository;
import java.util.List;
import java.util.stream.Collectors;
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
    private final MemberCompanionRepository memberCompanionRepository;

    /**
     * 그룹에 회원을 가입시키는 메서드입니다.
     *
     * @param companionJoinRequestDto 그룹 가입 요청 DTO, 이메일과 그룹 초대 코드를 포함합니다.
     * @return ResponseEntity 객체를 반환하여 가입 성공 또는 실패 응답을 전송합니다.
     */
    @Transactional
    public ResponseEntity joinCompanion(CompanionJoinRequestDto companionJoinRequestDto) {

        Member member = memberRepository.findMemberByEmail(companionJoinRequestDto.getEmail())
                .orElse(null);

        Companion companion = companionRepository.findByCode(companionJoinRequestDto.getCode())
                .orElse(null);

        if (companion != null) {
            if (isAlreadyMember(member, companion)) {
                return ResponseEntity.status(409)
                        .body(new FailResponseDto(false, "이미 해당 그룹에 가입되어 있습니다.", 409));
            }

            // 회원과 그룹을 연결하는 MemberCompanion 객체를 생성합니다.
            MemberCompanion memberCompanion = MemberCompanion.builder()
                    .member(member)
                    .companion(companion)
                    .role(Role.TEAMMEMBER)
                    .build();

            memberCompanionRepository.save(memberCompanion);

            addMemberCompanion(companion, member, memberCompanion);

            // 스트림을 사용하여 companionMmeberId 목록을 생성합니다.
            List<Long> companionMmeberId = memberCompanionRepository.findByCompanion(companion)
                    .stream()
                    .map(MemberCompanion::getId)
                    .collect(Collectors.toList());

            CompanionJoinDto join = CompanionJoinDto.builder()
                    .id(companion.getId())
                    .companionName(companion.getName())
                    .companionMemberId(companionMmeberId)
                    .build();

            // 가입 성공 응답을 생성하고 반환
            return ResponseEntity.ok()
                    .body(new SuccessResponseDto(true, "그룹에 참여되었습니다.", join));
        } else {
            return ResponseEntity.status(404)
                    .body(new FailResponseDto(false, "해당 코드와 일치하는 그룹이 없습니다.", 404));
        }
    }

    /**
     * Companion와 Member를 연결하고 업데이트하는 메서드입니다.
     *
     * @param companion       그룹 객체
     * @param member          회원 객체
     * @param memberCompanion MemberCompanion 객체
     */
    @Transactional
    public void addMemberCompanion(Companion companion, Member member,
            MemberCompanion memberCompanion) {

        companion.getCompanionMembers().add(memberCompanion);
        member.getMyCompanions().add(memberCompanion);
    }

    private boolean isAlreadyMember(Member member, Companion companion) {
        return memberCompanionRepository.findByMemberAndCompanion(member, companion) != null;
    }
}
