package com.A605.pijja.domain.member.dto;

import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class CompanionDto {
    private String name;

    private Boolean isStart;

    private Boolean isEnd;

    private String mate;

    private String tendency;

    private LocalDateTime startTime;
    
    private LocalDateTime endTime;
}
