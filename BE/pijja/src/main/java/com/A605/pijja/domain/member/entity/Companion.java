package com.A605.pijja.domain.member.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@AllArgsConstructor
public class Companion {

    // Companion 엔티티는 동반 여행에 참여하는 개별 동반자의 정보를 나타냅니다.
    // 회원들과의 다대다 관계를 통해 여러 회원과 연결될 수 있으며, 동반 여행의 세부 정보를 저장합니다.

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // 동반자 엔티티의 고유 식별자

    private String name; // 동반자의 이름

    private String code; // 동반자를 구분하는 코드 정보

    private Boolean isStart; // 동반 여행의 시작 여부

    private Boolean isEnd; // 동반 여행의 종료 여부

    private String tendency; // 동반자의 특성 정보

    private String mate; // 동반자에 대한 추가 정보

    private LocalDateTime startTime; // 동반 여행의 시작 시간

    private LocalDateTime endTime; // 동반 여행의 종료 시간

    @OneToMany(mappedBy = "companion", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<MemberCompanion> companionMembers = new ArrayList<>();
}
