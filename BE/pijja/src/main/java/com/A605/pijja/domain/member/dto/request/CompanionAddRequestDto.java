package com.A605.pijja.domain.member.dto.request;

import java.time.LocalDateTime;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class CompanionAddRequestDto {

    private String name;

    private String mate;

    private String tendency;

    private LocalDateTime startTime;

    private LocalDateTime endTime;

    private Long memberId;
}
