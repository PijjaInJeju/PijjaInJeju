package com.A605.pijja.domain.plan.dto.request;

import lombok.*;

import java.util.List;

@Getter
@Builder
@NoArgsConstructor(access= AccessLevel.PROTECTED)
@AllArgsConstructor
public class GetRouteViaTmapRequestDto {
    private String startName;
    private String startX; //lon이 X
    private String startY;  //lat이 Y
    private String startTime;
    private String endName;
    private String endX;
    private String endY;
    private List<viaPointDto> viaPoints;

    @Getter
    @Builder
    @NoArgsConstructor(access= AccessLevel.PROTECTED)
    @AllArgsConstructor
    public static class viaPointDto{
        private String viaPointId;
        private String viaPointName;
        private String viaX;
        private String viaY;
    }
}
