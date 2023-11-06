package com.A605.pijja.domain.member.service;

import com.A605.pijja.domain.member.dto.SuccessResponseDto;
import com.A605.pijja.domain.member.dto.response.MyCompanionListDto;
import com.A605.pijja.domain.member.entity.Companion;
import com.A605.pijja.domain.member.entity.Member;
import com.A605.pijja.domain.member.repository.MemberCompanionRepository;
import com.A605.pijja.domain.member.repository.MemberRepository;
import com.A605.pijja.global.time.TimeUtil;
import java.time.LocalDateTime;
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

    // TimeUtil 클래스를 주입받습니다.
    private final TimeUtil timeUtil;

    public ResponseEntity getMyCompanions(Long memberId) {
        Member member = memberRepository.findMemberById(memberId).orElse(null);

        List<MyCompanionListDto> myCompanions = memberCompanionRepository.findByMember(member)
                .stream()
                .map(memberCompanion -> {
                    Companion companion = memberCompanion.getCompanion();
                    MyCompanionListDto.MyCompanionListDtoBuilder builder = MyCompanionListDto.builder()
                            .id(companion.getId())
                            .name(companion.getName())
                            .tendency(companion.getTendency())
                            .mate(companion.getMate())
                            .startTime(companion.getStartTime())
                            .endTime(companion.getEndTime());

                    // 현재 시간을 가져옵니다.
                    LocalDateTime currentTime = timeUtil.getCurrentLocalDateTime();

                    // startTime과 endTime과 현재 시간을 비교하여 isStart 및 isEnd 값을 설정합니다.
                    if (currentTime.isAfter(companion.getStartTime())) {
                        builder.isStart(true);
                    } else {
                        builder.isStart(false);
                    }

                    if (currentTime.isAfter(companion.getEndTime())) {
                        builder.isEnd(true);
                    } else {
                        builder.isEnd(false);
                    }

                    return builder.build();
                })
                .collect(Collectors.toList());

        return ResponseEntity.ok()
                .body(new SuccessResponseDto(true, "내 그룹 리스트를 불러왔습니다.", myCompanions));
    }
}
