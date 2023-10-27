package com.A605.pijja.domain.member.service;

import com.A605.pijja.domain.member.dto.CompanionRegistDto;
import com.A605.pijja.domain.member.entity.Companion;
import com.A605.pijja.domain.member.entity.Member;
import com.A605.pijja.domain.member.entity.MemberCompanion;
import com.A605.pijja.domain.member.repository.CompanionRepository;
import com.A605.pijja.domain.member.repository.MemberCompanionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Random;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class CompanionService {

    private final CompanionRepository companionRepository;

    private final MemberCompanionRepository memberCompanionRepository;

    public String generateRandomCode() {
        String str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        StringBuilder randomString = new StringBuilder();

        Random random = new Random();

        for (int i = 0; i < 6; i++) {
            int index = random.nextInt(str.length());
            randomString.append(str.charAt(index));
        }
        return randomString.toString();
    }

    @Transactional
    public void saveCompanion(CompanionRegistDto companionRegistDto) {
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
    }

    public void getAllCompanion() {
        companionRepository.findAll();
    }
}