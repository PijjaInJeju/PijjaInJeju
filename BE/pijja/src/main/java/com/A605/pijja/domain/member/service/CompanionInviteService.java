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

    /**
     * 회원을 그룹에 초대하는 메서드입니다.
     *
     * @param companionInviteRequestDto 회원 초대 요청 DTO, 이메일과 그룹 식별자를 포함합니다.
     * @return ResponseEntity 객체를 반환하여 성공 또는 실패 응답을 전송합니다.
     */
    public ResponseEntity inviteMember(CompanionInviteRequestDto companionInviteRequestDto) {
        // 요청으로부터 전달된 이메일과 그룹 식별자를 추출하여 사용합니다.
        String email = companionInviteRequestDto.getEmail();
        Long companionId = companionInviteRequestDto.getCompanionId();
        String nowEmail = companionInviteRequestDto.getNowEmail();

        // 이메일로 회원을 찾습니다.
        Optional<Member> memberOptional = memberRepository.findMemberByEmail(email);
        // 그룹을 식별자로 찾습니다.
        Optional<Companion> companionOptional = companionRepository.findById(companionId);

        Optional<Member> nowMemberOptional = memberRepository.findMemberByEmail(nowEmail);

        // 찾아낸 회원과 그룹을 변수에 할당합니다.
        Member member = memberOptional.get();
        Companion companion = companionOptional.get();
        Member nowMember = nowMemberOptional.get();

        // 회원이 그룹의 리더인지 확인합니다.
        if (isLeader(nowMember, companion)) {

            // 그룹의 초대 코드를 가져옵니다.
            String code = companion.getCode();

            // 성공 응답을 생성하고 반환
            return ResponseEntity.ok()
                    .body(new SuccessResponseDto(true, "그룹 초대 코드를 보냅니다.", code));
        } else {
            // 실패 응답을 생성하고 반환
            return ResponseEntity.ok()
                    .body(new FailResponseDto(false, "초대 권한이 없습니다.", 401));
        }
    }

    /**
     * 회원이 그룹의 리더인지 확인하는 메서드입니다.
     *
     * @param member    확인할 회원 객체
     * @param companion 확인할 그룹 객체
     * @return 회원이 그룹 리더인 경우 true, 그렇지 않으면 false를 반환합니다.
     */
    private boolean isLeader(Member member, Companion companion) {
        // 회원과 그룹의 연관 정보를 가져옵니다.
        MemberCompanion memberCompanion = memberCompanionRepository.findByMemberAndCompanion(member,
                companion);

        if (memberCompanion != null) {
            return memberCompanion.getRole() == Role.LEADER;
        } else {
            return false;
        }
        // 회원이 그룹 리더인지 확인합니다.
    }
}
