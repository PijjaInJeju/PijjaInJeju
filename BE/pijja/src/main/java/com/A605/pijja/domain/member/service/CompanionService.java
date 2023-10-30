package com.A605.pijja.domain.member.service;

import com.A605.pijja.domain.member.dto.CompanionRegistDto;
import com.A605.pijja.domain.member.entity.Companion;
import com.A605.pijja.domain.member.entity.Member;
import com.A605.pijja.domain.member.entity.MemberCompanion;
import com.A605.pijja.domain.member.entity.Role;
import com.A605.pijja.domain.member.repository.CompanionRepository;
import com.A605.pijja.domain.member.repository.MemberCompanionRepository;
import com.A605.pijja.domain.member.repository.MemberRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Random;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class CompanionService {

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
    public void registCompanion(CompanionRegistDto companionRegistDto, Long memberId) {
        Member member = memberRepository.findById(memberId)
                .orElseThrow(() -> new EntityNotFoundException("회원을 찾을 수 없습니다."));

        Companion companion = Companion.builder()
                .name(companionRegistDto.getName())
                .code(generateRandomCode())
                .isStart(companionRegistDto.getIsStart())
                .isEnd(companionRegistDto.getIsEnd())
                .tendency(companionRegistDto.getTendency())
                .mate(companionRegistDto.getMate())
                .startTime(companionRegistDto.getStartTime())
                .endTime(companionRegistDto.getEndTime())
                .build();

        companionRepository.save(companion);

        MemberCompanion memberCompanion = MemberCompanion.builder()
                .member(member)
                .companion(companion)
                .role(Role.LEARDER)
                .build();

        memberCompanionRepository.save(memberCompanion);
    }

    public void getAllCompanion() {
        companionRepository.findAll();
    }
}