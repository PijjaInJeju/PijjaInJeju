package com.A605.pijja.domain.member.service;

import com.A605.pijja.domain.member.dto.MemberCompanionListDto;
import com.A605.pijja.domain.member.entity.Companion;
import com.A605.pijja.domain.member.entity.Member;
import com.A605.pijja.domain.member.entity.MemberCompanion;
import com.A605.pijja.domain.member.repository.CompanionRepository;
import com.A605.pijja.domain.member.repository.MemberCompanionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class MemberCompanionService {

    private final CompanionRepository companionRepository;

    private final MemberCompanionRepository memberCompanionRepository;

    public List<Member> getMemberOfCompanion(MemberCompanionListDto memberCompanionListDto) {
        Long companionId = memberCompanionListDto.getCompanionId();
        Companion companion = companionRepository.findById(companionId).orElse(null);

        if(companion != null) {
            List<Member> members = new ArrayList<>();
            List<MemberCompanion> memberCompanions = memberCompanionRepository.findByCompanion(companion);

            for(MemberCompanion memberCompanion : memberCompanions) {
                members.add(memberCompanion.getMember());
            }
            return members;
        } else {
            return Collections.emptyList();
        }
    }
}
