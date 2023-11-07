package com.A605.pijja.domain.member.dto.response;

import java.time.LocalDate;
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

    private LocalDate startDay;

    private LocalDate endDay;

    private Long memberId;
}
