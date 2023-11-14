package com.A605.pijja.domain.plan.dto.response;

import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class PlanListResponseDto {
    PlanDto plan;
    @Getter
    @Builder
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    @AllArgsConstructor
    public static class PlanDto{
        Long id;
        String name;
        LocalDate startDay;
        LocalDate endDay;
    }
}
