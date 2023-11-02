package com.A605.pijja.domain.member.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class MemberDto {

    private Long id; // 회원 엔티티의 고유 식별자

    private String email; // 회원의 고유한 이메일 주소

    private String nickname; // 회원의 사용자명

    private String snsType; // 소셜 로그인 종류

    private String originalId; // 고유 아이디
}
