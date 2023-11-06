package com.A605.pijja.domain.plan.dto.request;

import lombok.*;

import java.util.ArrayList;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class AddRouteRequestDto {
    private Long startPlaceId;
    private Long endPlaceId;

    private float distance;
    private float time;

    private ArrayList<PathDto> pathDto;

    @Getter
    @Builder
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    @AllArgsConstructor
    public static class PathDto{
        private float latitude;
        private float longitude;
    }

}
