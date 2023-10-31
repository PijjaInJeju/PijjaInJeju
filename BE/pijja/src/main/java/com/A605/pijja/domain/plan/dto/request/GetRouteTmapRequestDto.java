package com.A605.pijja.domain.plan.dto.request;

import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class GetRouteTmapRequestDto {
    private float startY;
    private float startX;
    private float endY;
    private float endX;
}
