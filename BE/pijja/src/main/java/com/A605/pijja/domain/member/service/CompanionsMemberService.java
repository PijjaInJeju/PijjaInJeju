package com.A605.pijja.domain.member.service;

import com.A605.pijja.domain.member.dto.FailResponseDto;
import com.A605.pijja.domain.member.dto.SuccessResponseDto;
import com.A605.pijja.domain.member.dto.request.CompanionIdRequestDto;
import com.A605.pijja.domain.member.entity.Companion;
import com.A605.pijja.domain.member.entity.Member;
import com.A605.pijja.domain.member.entity.MemberCompanion;
import com.A605.pijja.domain.member.repository.CompanionRepository;
import com.A605.pijja.domain.member.repository.MemberCompanionRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
// 그룹의 멤버 리스트를 조회하는 서비스
public class CompanionsMemberService {

    private final CompanionRepository companionRepository;
    private final MemberCompanionRepository memberCompanionRepository;

    /**
     * 특정 그룹의 멤버 목록을 반환하는 메서드입니다.
     *
     * @param memberCompanionListDto 그룹 식별자를 가지고 있는 DTO
     * @return ResponseEntity 객체를 반환하여 멤버 목록을 성공적으로 반환합니다.
     */
    public ResponseEntity getMemberOfCompanion(CompanionIdRequestDto memberCompanionListDto) {
        Long companionId = memberCompanionListDto.getCompanionId();
        Optional<Companion> companionOptional = companionRepository.findById(companionId);

        // 그룹이 존재하지 않는 경우
        if (companionOptional.isEmpty()) {
            return ResponseEntity.ok()
                    .body(new FailResponseDto(false, "조회된 그룹이 없습니다.", 400));
        }

        Companion companion = companionOptional.get();

        List<Member> members = new ArrayList<>();
        List<MemberCompanion> memberCompanions = memberCompanionRepository.findByCompanion(
                companion);

        // 그룹에 속한 멤버 목록을 가져옵니다.
        for (MemberCompanion memberCompanion : memberCompanions) {
            members.add(memberCompanion.getMember());
        }

        // 멤버 목록을 반환하는 성공 응답을 생성하고 반환
        return ResponseEntity.ok()
                .body(new SuccessResponseDto(true, "그룹에 소속된 멤버 리스트를 불러왔습니다.", members));
    }
}
