package com.A605.pijja.domain.member.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class MemberRegistDto {

    private String nickname;

    private String email;
}
