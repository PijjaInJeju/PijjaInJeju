package com.A605.pijja.domain.member.service;

import com.A605.pijja.domain.member.dto.CompanionMemberListDto;
import com.A605.pijja.domain.member.entity.Companion;
import com.A605.pijja.domain.member.entity.Member;
import com.A605.pijja.domain.member.entity.MemberCompanion;
import com.A605.pijja.domain.member.repository.CompanionRepository;
import com.A605.pijja.domain.member.repository.MemberCompanionRepository;
import jakarta.persistence.EntityNotFoundException;
import java.util.ArrayList;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class CompanionsMemberService {

    private final CompanionRepository companionRepository;

    private final MemberCompanionRepository memberCompanionRepository;

    public List<Member> getMemberOfCompanion(CompanionMemberListDto memberCompanionListDto) {
        Long companionId = memberCompanionListDto.getCompanionId();
        Companion companion = companionRepository.findById(companionId)
                .orElseThrow(() -> new EntityNotFoundException("존재하지 않는 그룹입니다."));

        List<Member> members = new ArrayList<>();
        List<MemberCompanion> memberCompanions = memberCompanionRepository.findByCompanion(
                companion);

        for (MemberCompanion memberCompanion : memberCompanions) {
            members.add(memberCompanion.getMember());
        }

        return members;
    }
}
