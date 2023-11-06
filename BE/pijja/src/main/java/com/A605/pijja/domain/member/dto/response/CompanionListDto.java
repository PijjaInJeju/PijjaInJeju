package com.A605.pijja.domain.member.dto.response;

import java.time.LocalDateTime;
import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class CompanionListDto {

    private String name; // 여행 그룹의 이름

    private String code; // 여행 그룹를 구분하는 코드 정보

    private Boolean isStart; // 동반 여행의 시작 여부

    private Boolean isEnd; // 동반 여행의 종료 여부

    private String tendency; // 여행 그룹의 특성 정보

    private String mate; // 여행 그룹에 대한 추가 정보

    private LocalDateTime startTime; // 동반 여행의 시작 시간

    private LocalDateTime endTime; // 동반 여행의 종료 시간

    private String leader;
}
