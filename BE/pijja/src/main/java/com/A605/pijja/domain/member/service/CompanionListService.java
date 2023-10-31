package com.A605.pijja.domain.member.service;

import com.A605.pijja.domain.member.repository.CompanionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class CompanionListService {

    private final CompanionRepository companionRepository;

    public void getAllCompanion() {
        companionRepository.findAll();
    }

}
