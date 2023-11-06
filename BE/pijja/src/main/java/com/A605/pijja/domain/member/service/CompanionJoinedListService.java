package com.A605.pijja.domain.member.service;

import com.A605.pijja.domain.member.dto.SuccessResponseDto;
import com.A605.pijja.domain.member.dto.response.CompanionListDto;
import com.A605.pijja.domain.member.entity.Companion;
import com.A605.pijja.domain.member.entity.Member;
import com.A605.pijja.domain.member.repository.MemberCompanionRepository;
import com.A605.pijja.domain.member.repository.MemberRepository;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class CompanionJoinedListService {

    private final MemberRepository memberRepository;

    private final MemberCompanionRepository memberCompanionRepository;

    public ResponseEntity getMyCompanions(Long memberId) {
        Member member = memberRepository.findMemberById(memberId)
                .orElse(null);

        List<CompanionListDto> myCompanions = memberCompanionRepository.findByMember(member)
                .stream()
                .map(memberCompanion -> {
                    Companion companion = memberCompanion.getCompanion();
                    return CompanionListDto.builder()
                            .id(companion.getId())
                            .name(companion.getName())
                            .isStart(companion.getIsStart())
                            .isEnd(companion.getIsEnd())
                            .tendency(companion.getTendency())
                            .mate(companion.getMate())
                            .startTime(companion.getStartTime())
                            .endTime(companion.getEndTime())
                            .build();
                })
                .collect(Collectors.toList());

        return ResponseEntity.ok()
                .body(new SuccessResponseDto(true, "내 그룹 리스트를 불러왔습니다.", myCompanions));
    }
}
