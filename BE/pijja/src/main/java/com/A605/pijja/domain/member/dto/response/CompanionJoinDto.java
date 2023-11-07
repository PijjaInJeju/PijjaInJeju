package com.A605.pijja.domain.member.dto.response;

import java.util.List;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class CompanionJoinDto {

    private Long id;

    private String companionName;

    private List<Long> companionMemberId;
}
