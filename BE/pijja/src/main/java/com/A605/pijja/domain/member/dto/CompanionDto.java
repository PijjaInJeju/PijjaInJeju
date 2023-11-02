package com.A605.pijja.domain.member.dto;

import java.time.LocalDateTime;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class CompanionDto {

    private Long id; // 동반자 엔티티의 고유 식별자

    private String name; // 동반자의 이름

    private String code; // 동반자를 구분하는 코드 정보

    private Boolean isStart; // 동반 여행의 시작 여부

    private Boolean isEnd; // 동반 여행의 종료 여부

    private String tendency; // 동반자의 특성 정보

    private String mate; // 동반자에 대한 추가 정보

    private LocalDateTime startTime; // 동반 여행의 시작 시간

    private LocalDateTime endTime; // 동반 여행의 종료 시간
}
