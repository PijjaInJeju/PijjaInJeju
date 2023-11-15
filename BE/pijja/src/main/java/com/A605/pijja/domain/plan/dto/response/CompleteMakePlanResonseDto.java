package com.A605.pijja.domain.plan.dto.response;

import lombok.*;

import java.util.List;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class CompleteMakePlanResonseDto {
    private Long planId;
    private String name;
    private Long companionId;
    private List<PlanDto> planList;

    @Getter
    @Builder
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    @AllArgsConstructor
    public static class PlanDto{
        private int day;
        private List<PlaceDto> data;
        private List<PathDto> pathList;
    }
    @Getter
    @Builder
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    @AllArgsConstructor
    public static class PathDto{
        private float latitude;
        private float longitude;

    }
    @Getter
    @Builder
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    @AllArgsConstructor
    public static class PlaceDto{
        private Long id;
        private String title;
        private String address;
    }
}
