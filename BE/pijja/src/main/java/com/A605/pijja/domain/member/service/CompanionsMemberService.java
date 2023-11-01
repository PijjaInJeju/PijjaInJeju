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
// 그룹 멤버 리스트
public class CompanionsMemberService {

    private final CompanionRepository companionRepository;

    private final MemberCompanionRepository memberCompanionRepository;

    public ResponseEntity getMemberOfCompanion(CompanionIdRequestDto memberCompanionListDto) {
        Long companionId = memberCompanionListDto.getCompanionId();
        Optional<Companion> companionOptional = companionRepository.findById(companionId);
        if (companionOptional.isEmpty()) {
            return ResponseEntity.ok()
                    .body(new FailResponseDto(false, "조회된 그룹이 없습니다.", 400));
        }
        
        Companion companion = companionOptional.get();

        List<Member> members = new ArrayList<>();
        List<MemberCompanion> memberCompanions = memberCompanionRepository.findByCompanion(
                companion);

        for (MemberCompanion memberCompanion : memberCompanions) {
            members.add(memberCompanion.getMember());
        }

        return ResponseEntity.ok()
                .body(new SuccessResponseDto(true, "그룹에 소속된 멤버 리스트를 불러왔습니다.", members));
    }
}
