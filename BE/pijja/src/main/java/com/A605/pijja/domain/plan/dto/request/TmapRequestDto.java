package com.A605.pijja.domain.plan.dto.request;

import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class TmapRequestDto {
    private float endX;
    private float endY;
    private float startX;
    private float startY;
}
