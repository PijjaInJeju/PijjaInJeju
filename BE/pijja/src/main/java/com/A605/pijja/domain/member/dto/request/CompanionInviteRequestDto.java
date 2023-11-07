package com.A605.pijja.domain.member.dto.request;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class CompanionInviteRequestDto {

    private Long companionId;

    private String email;

    private String nowEmail;
}
