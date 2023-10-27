package com.A605.pijja.domain.member.service;

import com.A605.pijja.domain.member.dto.CompanionDto;
import com.A605.pijja.domain.member.entity.Companion;
import com.A605.pijja.domain.member.repository.CompanionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Random;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class CompanionService {

    private final CompanionRepository companionRepository;

    public String generateRandomCode() {
        String str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        StringBuilder randomString = new StringBuilder();

        Random random = new Random();

        for(int i=0; i< 6; i++) {
            int index = random.nextInt(str.length());
            randomString.append(str.charAt(index));
        }
        return randomString.toString();
    }

    @Transactional
    public void saveCompanion(CompanionDto companionDto) {
        Companion companion = Companion.builder()
                .name(companionDto.getName())
                .code(generateRandomCode())
                .isStart(companionDto.getIsStart())
                .isEnd(companionDto.getIsEnd())
                .tendency(companionDto.getTendency())
                .mate(companionDto.getMate())
                .startTime(companionDto.getStartTime())
                .endTime(companionDto.getEndTime())
                .build();

        companionRepository.save(companion);
    }
}
