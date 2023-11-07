package com.A605.pijja.domain.plan.dto.response;

import lombok.*;

import java.util.ArrayList;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class GetRouteResponseDto {
    private ArrayList<PlaceDto> placeList;
    private float totalDistance;
    private float totalTime;
    private ArrayList<PathDto> pathList;
}
