package com.A605.pijja.domain.member.dto.response;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class MemberListDto {

    private Long id;

    private String email;

    private String nickname;
}
