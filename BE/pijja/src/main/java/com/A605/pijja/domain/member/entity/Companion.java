package com.A605.pijja.domain.member.entity;

import com.A605.pijja.domain.plan.entity.Plan;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@AllArgsConstructor
public class Companion {

    // Companion 엔티티는 여행 그룹의 정보를 나타냅니다.
    // 회원들과의 다대다 관계를 통해 여러 회원과 연결될 수 있으며, 여행 그룹의 세부 정보를 저장합니다.

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // 여행 그룹 엔티티의 고유 식별자

    private String name; // 여행 그룹의 이름

    private String code; // 여행 그룹를 구분하는 코드 정보

    private Boolean isStart; // 동반 여행의 시작 여부

    private Boolean isEnd; // 동반 여행의 종료 여부

    private String tendency; // 여행 그룹의 특성 정보

    private String mate; // 여행 그룹에 대한 추가 정보

    private LocalDate startDay; // 동반 여행의 시작 날짜

    private LocalDate endDay; // 동반 여행의 종료 날짜

    @OneToOne
    @JoinColumn(name = "PLAN_ID")
    private Plan plan;

    @OneToMany(mappedBy = "companion")
    private List<MemberCompanion> companionMembers = new ArrayList<>();

}
