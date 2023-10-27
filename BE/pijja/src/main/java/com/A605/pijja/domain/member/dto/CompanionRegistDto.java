package com.A605.pijja.domain.member.dto;

import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@Builder
public class CompanionRegistDto {
    private String name;

    private Boolean isStart;

    private Boolean isEnd;

    private String mate;

    private String tendency;

    private LocalDateTime startTime;

    private LocalDateTime endTime;
}
