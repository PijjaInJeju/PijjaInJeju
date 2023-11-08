package com.A605.pijja.domain.plan.dto.request;

import lombok.*;

import java.time.LocalDate;
import java.util.ArrayList;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class MakePlanRequestDto {
    private LocalDate startDay;
    private LocalDate endDay;
    private int totalDay;
    private String name;
//    private String mate;
//    private String  tendency;
    private ArrayList<PlaceDto> placeList;

    @Getter
    @Builder
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    @AllArgsConstructor
    public static class PlaceDto{
        private Long id;
    }

}
