package com.A605.pijja.domain.plan.dto.response;

import lombok.*;

import java.util.List;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class MakePlanResonseDto {
    private String title;
    private List<PlaceDto> data;

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
