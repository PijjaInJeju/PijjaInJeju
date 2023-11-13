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
public class MyCompanionListDto {

    private Long id; // 여행 그룹의 아이디

    private String name; // 여행 그룹의 이름

    private Boolean isStart; // 동반 여행의 시작 여부

    private Boolean isEnd; // 동반 여행의 종료 여부

    private List<String> tendencies; // 여행 그룹의 특성 정보

    private String mate; // 여행 그룹에 대한 추가 정보

    private LocalDate startDay; // 동반 여행의 시작 시간

    private LocalDate endDay; // 동반 여행의 종료 시간

    private Long planId; // 그룹 계획의 아이디
}
