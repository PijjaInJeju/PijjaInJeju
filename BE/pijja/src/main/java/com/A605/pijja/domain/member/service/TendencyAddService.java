package com.A605.pijja.domain.member.service;

import com.A605.pijja.domain.member.dto.SuccessResponseDto;
import com.A605.pijja.domain.member.dto.request.TendencyAddDto;
import com.A605.pijja.domain.member.dto.response.TendencyCreateDto;
import com.A605.pijja.domain.member.entity.Tendency;
import com.A605.pijja.domain.member.repository.TendencyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class TendencyAddService {
    private final TendencyRepository tendencyRepository;

    @Transactional
    public ResponseEntity addTendency(TendencyAddDto tendencyAddDto) {
        try {
            Tendency tendency = Tendency.builder()
                    .tendencyType(tendencyAddDto.getTendencyType())
                    .build();

            tendencyRepository.save(tendency);

            TendencyCreateDto tendencyCreateDto = TendencyCreateDto.builder()
                    .id(tendency.getId())
                    .tendency(tendency.getTendencyType())
                    .build();

            // Log to see if the tendency is being created
            System.out.println("Tendency created: " + tendencyCreateDto);

            return ResponseEntity.ok()
                    .body(new SuccessResponseDto(true, "여행 성향 등록이 완료되었습니다.", tendencyCreateDto));
        } catch (Exception e) {
            // Log any exceptions
            e.printStackTrace();
            return ResponseEntity.status(500)
                    .body(new SuccessResponseDto(false, "여행 성향 등록 중 오류가 발생했습니다.", null));
        }
    }
}
