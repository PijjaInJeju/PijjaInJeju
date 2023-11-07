package com.A605.pijja.domain.member.dto.response;

import java.time.LocalDateTime;
import lombok.Builder;
import lombok.Getter;


@Getter
@Builder
public class CompanionCreateDto {

    private String name;

    private String code;

    private Boolean isStart;

    private Boolean isEnd;

    private String mate;

    private String tendency;

    private LocalDateTime startTime;

    private LocalDateTime endTime;

    private Long memberId;
}
