package com.A605.pijja.domain.member.dto.response;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;


@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class CompanionCreateDto {

    private String name;

    private String code;

    private Boolean isStart;

    private Boolean isEnd;

    private String mate;

    private List<String> tendencies;

    private LocalDate startDay;

    private LocalDate endDay;

    private Long memberId;
}
