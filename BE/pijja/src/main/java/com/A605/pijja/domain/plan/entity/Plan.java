package com.A605.pijja.domain.plan.entity;

import com.A605.pijja.domain.member.entity.Companion;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class Plan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private LocalDateTime startTime;

    private LocalDateTime endTime;
    private Long isLike;

    @OneToOne
    @JoinColumn(name="COMPANION_ID")
    private Companion companion;

}
