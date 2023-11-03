package com.A605.pijja.domain.member.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
public class MemberCompanion {

    // MemberCompanion 엔티티는 회원과 여행 그룹 간의 관계를 정의하는 엔티티입니다.
    // 회원과 여행 그룹을 관련시키며, 회원-여행 그룹 관계의 역할 정보를 포함합니다.

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // 회원-여행 그룹 관계 엔티티의 고유 식별자

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member member; // 회원

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "companion_id")
    private Companion companion; // 그룹

    @Enumerated(value = EnumType.STRING)
    private Role role; // 회원-여행 그룹 관계 역할 (예: 리더, 구성원)
}
