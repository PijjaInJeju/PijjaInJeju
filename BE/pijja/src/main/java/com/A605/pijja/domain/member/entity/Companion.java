package com.A605.pijja.domain.member.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Builder
@AllArgsConstructor
public class Companion{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String code;

    private Boolean isStart;

    private Boolean isEnd;

    private String tendency;

    private String mate;

    private LocalDateTime startTime;

    private LocalDateTime endTime;
}
