package com.A605.pijja.domain.member.service;

import com.A605.pijja.domain.member.dto.CompanionAddDto;
import com.A605.pijja.domain.member.dto.SuccessResponseDto;
import com.A605.pijja.domain.member.entity.Companion;
import com.A605.pijja.domain.member.entity.Member;
import com.A605.pijja.domain.member.entity.MemberCompanion;
import com.A605.pijja.domain.member.entity.Role;
import com.A605.pijja.domain.member.repository.CompanionRepository;
import com.A605.pijja.domain.member.repository.MemberCompanionRepository;
import com.A605.pijja.domain.member.repository.MemberRepository;
import jakarta.persistence.EntityNotFoundException;
import java.util.Random;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class CompanionRegistService {

    private final CompanionRepository companionRepository;

    private final MemberCompanionRepository memberCompanionRepository;

    private final MemberRepository memberRepository;

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

    @Transactional
    public ResponseEntity registCompanion(CompanionAddDto companionAddDto) {
        Member member = memberRepository.findById(companionAddDto.getMemberId())
                .orElseThrow(() -> new EntityNotFoundException("회원을 찾을 수 없습니다."));

        Companion companion = Companion.builder()
                .name(companionAddDto.getName())
                .code(generateRandomCode())
                .isStart(companionAddDto.getIsStart())
                .isEnd(companionAddDto.getIsEnd())
                .tendency(companionAddDto.getTendency())
                .mate(companionAddDto.getMate())
                .startTime(companionAddDto.getStartTime())
                .endTime(companionAddDto.getEndTime())
                .build();

        companionRepository.save(companion);

        MemberCompanion memberCompanion = MemberCompanion.builder()
                .member(member)
                .companion(companion)
                .role(Role.LEARDER)
                .build();

        memberCompanionRepository.save(memberCompanion);

        return ResponseEntity.ok()
                .body(new SuccessResponseDto(true, "그룹 등록이 완료되었습니다.", companion));
    }
}