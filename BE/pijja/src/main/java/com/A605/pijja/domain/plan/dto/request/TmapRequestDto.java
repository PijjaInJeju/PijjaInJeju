package com.A605.pijja.domain.plan.dto.request;

import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class TmapRequestDto {
    private float endX; //lon이 X
    private float endY; //lat이 Y
    private float startX;
    private float startY;
}
