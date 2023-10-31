package com.A605.pijja.domain.member.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class MemberAddDto {

    private String nickname;

    private String email;
}
