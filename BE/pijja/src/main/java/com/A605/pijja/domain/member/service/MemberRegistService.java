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
// 카카오 회원 등록
public class MemberRegistService {

    private final MemberRepository memberRepository;

    @Transactional
    public ResponseEntity registMember(MemberRegistRequestDto memberRegistRequestDto) {
        if (memberRepository.findMemberByEmail(memberRegistRequestDto.getEmail()).isPresent()) {
            return ResponseEntity.status(409)
                    .body(new FailResponseDto(false, "이미 존재하는 이메일입니다.", 409));
        } else {
            Member member = Member.builder()
                    .nickname(memberRegistRequestDto.getNickname())
                    .email(memberRegistRequestDto.getEmail())
                    .build();

            memberRepository.save(member);

            //spring franework에서 제공하는 클래스, 응답에 대한 객체임
            // .ok()의 경우, 제대로 실행이 되어서 status 200를 반환, body에 들어가는 값이 성공적으로 실행된 뒤에 반환해야 되는 데이터가 되는 객체가 들어감
            // 이때, 반환되는 객체의 포맷을 일치시키기 위해 successResponseDto, failResponseDto를 사용
            return ResponseEntity.ok()
                    .body(new SuccessResponseDto(true, "회원 등록이 완료되었습니다.", member));
        }
    }
}
