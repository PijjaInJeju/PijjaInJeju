package com.A605.pijja.domain.plan.dto.request;

import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class TmapRequestDto {
    private double endX; //lon이 X
    private double endY; //lat이 Y
    private double startX;
    private double startY;
}
