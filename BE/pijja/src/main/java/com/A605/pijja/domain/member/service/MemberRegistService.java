package com.A605.pijja.domain.member.service;

import com.A605.pijja.domain.member.dto.FailResponseDto;
import com.A605.pijja.domain.member.dto.SuccessResponseDto;
import com.A605.pijja.domain.member.dto.request.MemberRegistRequestDto;
import com.A605.pijja.domain.member.entity.Member;
import com.A605.pijja.domain.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
// 카카오 회원 등록 서비스
public class MemberRegistService {

    private final MemberRepository memberRepository;

    /**
     * 회원을 등록하는 메서드
     *
     * @param memberRegistRequestDto 회원 등록 요청 DTO
     * @return ResponseEntity 객체를 반환하여 등록 성공 또는 실패 응답을 전송
     */
    @Transactional
    public ResponseEntity registMember(MemberRegistRequestDto memberRegistRequestDto) {
        // 이미 존재하는 이메일인지 확인
        if (memberRepository.findMemberByEmail(memberRegistRequestDto.getEmail()).isPresent()) {
            // 이미 존재하는 이메일인 경우 409(Conflict) 상태를 반환
            return ResponseEntity.status(409)
                    .body(new FailResponseDto(false, "이미 존재하는 이메일입니다.", 409));
        } else {
            // 회원 객체를 생성하여 저장
            Member member = Member.builder()
                    .nickname(memberRegistRequestDto.getNickname())
                    .email(memberRegistRequestDto.getEmail())
                    .build();

            memberRepository.save(member);

            // 회원 등록 성공 응답을 생성하고 반환
            return ResponseEntity.ok()
                    .body(new SuccessResponseDto(true, "회원 등록이 완료되었습니다.", member));
        }
    }
}
