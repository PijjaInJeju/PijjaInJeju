package com.A605.pijja.domain.member.service;

import com.A605.pijja.domain.member.dto.FailResponseDto;
import com.A605.pijja.domain.member.dto.SuccessResponseDto;
import com.A605.pijja.domain.member.dto.request.CompanionAddRequestDto;
import com.A605.pijja.domain.member.dto.response.CompanionCreateDto;
import com.A605.pijja.domain.member.entity.Companion;
import com.A605.pijja.domain.member.entity.Member;
import com.A605.pijja.domain.member.entity.MemberCompanion;
import com.A605.pijja.domain.member.entity.Role;
import com.A605.pijja.domain.member.repository.CompanionRepository;
import com.A605.pijja.domain.member.repository.MemberCompanionRepository;
import com.A605.pijja.domain.member.repository.MemberRepository;
import com.A605.pijja.global.time.TimeUtil;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Random;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
// 그룹 만들기를 위한 서비스
public class CompanionRegistService {

    private final CompanionRepository companionRepository;
    private final MemberCompanionRepository memberCompanionRepository;
    private final MemberRepository memberRepository;
    private final TimeUtil timeUtil;

    /**
     * 랜덤 그룹 초대 코드 생성 메서드
     *
     * @return 6자리 랜덤 문자열 형태의 그룹 초대 코드
     */
    public String generateRandomCode() {
        String str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        StringBuilder randomString = new StringBuilder();

        Random randomGenerator = new Random();

        for (int i = 0; i < 6; i++) {
            int index = randomGenerator.nextInt(str.length());
            randomString.append(str.charAt(index));
        }
        return randomString.toString();
    }

    /**
     * 그룹 등록을 처리하는 메서드
     *
     * @param companionAddRequestDto 그룹 등록 요청 DTO
     * @return ResponseEntity 객체를 반환하여 등록 성공 또는 실패 응답을 전송
     */
    @Transactional
    public ResponseEntity registCompanion(CompanionAddRequestDto companionAddRequestDto) {
        Member member = memberRepository.findById(companionAddRequestDto.getMemberId())
                .orElse(null);

        Long memberId = member.getId();

        LocalDate startTime = companionAddRequestDto.getStartDay();

        LocalDate endTime = companionAddRequestDto.getEndDay();

        LocalDate currentTime = timeUtil.getCurrentLocalDate();

        if (startTime.isBefore(currentTime)) {
            return ResponseEntity.status(400)
                    .body(new FailResponseDto(false, "시작 날짜가 현재 날짜보다 이전입니다.", 400));
        }

        if (endTime.isBefore(currentTime)) {
            return ResponseEntity.status(400)
                    .body(new FailResponseDto(false, "종료 날짜가 현재 날짜보다 이전입니다.", 400));
        }

        if (endTime.isBefore(startTime)) {
            return ResponseEntity.status(400)
                    .body(new FailResponseDto(false, "종료 날짜가 시작 날짜보다 이전입니다.", 400));
        }

        Boolean isStart = startTime.isBefore(currentTime);
        Boolean isEnd = endTime.isBefore(currentTime);

        Companion companion = Companion.builder()
                .name(companionAddRequestDto.getName())
                .code(generateRandomCode())
                .isStart(isStart)
                .isEnd(isEnd)
                .tendency(companionAddRequestDto.getTendency())
                .mate(companionAddRequestDto.getMate())
                .startDay(companionAddRequestDto.getStartDay())
                .endDay(companionAddRequestDto.getEndDay())
                .companionMembers(new ArrayList<>())
                .build();

        companionRepository.save(companion);

        // MemberCompanion 엔티티를 생성
        MemberCompanion memberCompanion = MemberCompanion.builder()
                .member(member)
                .companion(companion)
                .role(Role.LEADER)
                .build();

        memberCompanionRepository.save(memberCompanion);

        addMemberCompanion(companion, member, memberCompanion);

        CompanionCreateDto create = CompanionCreateDto.builder()
                .name(companion.getName())
                .code(companion.getCode())
                .isStart(isStart)
                .isEnd(isEnd)
                .mate(companion.getMate())
                .tendency(companion.getTendency())
                .startDay(companion.getStartDay())
                .endDay(companion.getEndDay())
                .memberId(memberId)
                .build();

        // 가입 성공 응답을 생성하고 반환
        return ResponseEntity.ok()
                .body(new SuccessResponseDto(true, "그룹을 생성하셨습니다.", create));

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
}
