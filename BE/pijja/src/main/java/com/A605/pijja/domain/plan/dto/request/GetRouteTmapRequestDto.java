package com.A605.pijja.domain.plan.dto.request;

import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class GetRouteTmapRequestDto {
    private Long startPlaceId;
    private Long endPlaceId;
    private float distance;
    private float time;
}
