package com.A605.pijja.domain.plan.dto.request;

import lombok.*;

import java.util.List;

@Getter
@Builder
@NoArgsConstructor(access= AccessLevel.PROTECTED)
@AllArgsConstructor
public class GetRouteViaTmapRequestDto {
    private String startName;
    private float startX; //lon이 X
    private float startY;  //lat이 Y
    private String endName;
    private float endX;
    private float endY;
    private List<viaPointDto> viaPoints;

    @Getter
    @Builder
    @NoArgsConstructor(access= AccessLevel.PROTECTED)
    @AllArgsConstructor
    public static class viaPointDto{
        private String viaPointName;
        private float viaX;
        private float viaY;
    }
}
