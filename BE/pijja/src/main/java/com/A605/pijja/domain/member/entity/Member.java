package com.A605.pijja.domain.member.entity;

import jakarta.persistence.*;
import lombok.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class Member {

    // Member 엔티티는 시스템 사용자를 나타내며, 동반자와의 다대다 관계를 허용합니다.
    // 각 회원은 여러 개의 동반자와 연결될 수 있으며, 동반자 정보를 관리합니다.

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // 회원 엔티티의 고유 식별자

    @Column(unique = true)
    private String email; // 회원의 고유한 이메일 주소

    private String nickname; // 회원의 사용자명

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<MemberCompanion> myCompanions = new ArrayList<>();
}
