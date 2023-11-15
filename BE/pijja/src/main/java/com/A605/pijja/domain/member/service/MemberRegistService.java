package com.A605.pijja.domain.member.service;

import com.A605.pijja.domain.member.dto.FailResponseDto;
import com.A605.pijja.domain.member.dto.SuccessResponseDto;
import com.A605.pijja.domain.member.dto.request.MemberRegistRequestDto;
import com.A605.pijja.domain.member.dto.response.MemberDetailDto;
import com.A605.pijja.domain.member.entity.Member;
import com.A605.pijja.domain.member.repository.MemberRepository;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
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
        Optional<Member> existingMemberOptional = memberRepository.findMemberByEmail(
                memberRegistRequestDto.getEmail());

        if (existingMemberOptional.isPresent()) {
            Member existingMember = existingMemberOptional.get();
            MemberDetailDto memberDetailDto = MemberDetailDto.builder()
                    .id(existingMember.getId())
                    .nickname(existingMember.getNickname())
                    .email(existingMember.getEmail())
                    .snsType(existingMember.getSnsType())
                    .originalId(existingMember.getOriginalId())
                    .build();

            return ResponseEntity.ok()
                    .body(new SuccessResponseDto(true, "기존 회원으로 로그인합니다.", memberDetailDto));
        } else {
            // 회원 객체를 생성하여 저장
            Member member = Member.builder()
                    .nickname(memberRegistRequestDto.getNickname())
                    .email(memberRegistRequestDto.getEmail())
                    .snsType(memberRegistRequestDto.getSnsType())
                    .originalId(memberRegistRequestDto.getOriginalId())
                    .build();

            memberRepository.save(member);

            MemberDetailDto memberDetailDto = MemberDetailDto.builder()
                    .id(member.getId())
                    .nickname(member.getNickname())
                    .email(member.getEmail())
                    .snsType(member.getSnsType())
                    .originalId(member.getOriginalId())
                    .build();

            // 회원 등록 성공 응답 반환
            return ResponseEntity.ok()
                    .body(new SuccessResponseDto(true, "회원 등록이 완료되었습니다.", memberDetailDto));
        }
    }
}
