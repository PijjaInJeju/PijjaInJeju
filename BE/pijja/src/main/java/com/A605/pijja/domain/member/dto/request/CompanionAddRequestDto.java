package com.A605.pijja.domain.member.dto.request;

import java.time.LocalDate;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class CompanionAddRequestDto {

    private String name;

    private String mate;

    private String tendency;

    private LocalDate startDay;

    private LocalDate endDay;

    private Long memberId;
}