package com.A605.pijja.domain.member.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import java.util.ArrayList;
import java.util.List;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class Member {

    // Member 엔티티는 사용자를 나타내며, 여행 그룹과의 다대다 관계를 허용합니다.
    // 각 회원은 여러 개의 여행 그룹과 연결될 수 있으며, 여행 그룹 정보를 관리합니다.

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // 회원 엔티티의 고유 식별자

    @Column(unique = true)
    private String email; // 회원의 고유한 이메일 주소

    private String nickname; // 회원의 사용자명

    private String snsType; // 소셜 로그인 종류

    private String originalId; // 고유 아이디

    @OneToMany(mappedBy = "member")
    private List<MemberCompanion> myCompanions = new ArrayList<>();
}
