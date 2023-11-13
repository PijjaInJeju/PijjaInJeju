package com.A605.pijja.domain.plan.dto.response;

import lombok.*;

import java.util.List;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class PlanGroupingResponseDto {
    private int day;
    private List<PlaceDto> placeOrderList;

    @Getter
    @Builder
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    @AllArgsConstructor
    public static class PlaceDto{
        private Long id;
    }
}
