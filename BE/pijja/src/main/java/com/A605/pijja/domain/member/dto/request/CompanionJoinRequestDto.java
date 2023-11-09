package com.A605.pijja.domain.member.dto.request;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class CompanionJoinRequestDto {

    String email;
    
    String code;
}
