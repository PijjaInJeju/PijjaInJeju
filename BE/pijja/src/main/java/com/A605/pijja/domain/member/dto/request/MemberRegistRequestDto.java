package com.A605.pijja.domain.member.dto.request;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class MemberRegistRequestDto {

    private String nickname;

    private String email;

    private String snsType;

    private String originalId;
}
