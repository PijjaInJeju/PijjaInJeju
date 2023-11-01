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

    /**
     * 모든 그룹 목록을 반환하는 메서드입니다.
     *
     * @return ResponseEntity 객체를 반환하여 그룹 목록을 성공적으로 반환합니다.
     */
    public ResponseEntity getAllCompanions() {
        // 모든 그룹을 데이터베이스에서 조회합니다.
        List<Companion> companionList = companionRepository.findAll();

        // 성공 응답을 생성하고 그룹 목록을 반환
        return ResponseEntity.ok()
                .body(new SuccessResponseDto(true, "그룹 리스트를 불러왔습니다.", companionList));
    }
}
