package com.A605.pijja.domain.member.service;

import com.A605.pijja.domain.member.dto.SuccessResponseDto;
import com.A605.pijja.domain.member.entity.Companion;
import com.A605.pijja.domain.member.repository.CompanionRepository;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class CompanionListService {

    private final CompanionRepository companionRepository;

    public ResponseEntity getAllCompanions() {
        List<Companion> companionList = companionRepository.findAll();

        return ResponseEntity.ok()
                .body(new SuccessResponseDto(true, "그룹 리스트를 불러왔습니다.", companionList));
    }
}
