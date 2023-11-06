package com.A605.pijja.domain.member.dto;

import com.A605.pijja.domain.member.entity.MemberCompanion;
import com.A605.pijja.domain.member.entity.Role;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MemberCompanionDto {

    private Long id;

    private Long memberId;

    private Long companionId;

    private Role role;

    public MemberCompanionDto(MemberCompanion memberCompanion) {
        id = memberCompanion.getId();
        memberId = memberCompanion.getMember().getId();
        companionId = memberCompanion.getCompanion().getId();
        role = Role.LEADER;
    }
}
