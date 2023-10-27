package com.A605.pijja.domain.member.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
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

    @Builder
    public Companion(String name, String code, Boolean isStart, Boolean isEnd, String tendency, String mate, LocalDateTime startTime, LocalDateTime endTime) {
        this.name = name;
        this.code = code;
        this.isStart = isStart;
        this.isEnd = isEnd;
        this.tendency = tendency;
        this.mate = mate;
        this.startTime = startTime;
        this.endTime = endTime;
    }

}
