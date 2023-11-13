package com.A605.pijja.domain.plan.dto.request;

import lombok.*;

import java.time.LocalDate;
import java.util.ArrayList;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class MakePlanRequestDto {

    private int totalDay;
    private String name;
    private Long companionId;
    private ArrayList<PlaceDto> placeList;

    @Getter
    @Builder
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    @AllArgsConstructor
    public static class PlaceDto{
        private Long id;
    }

}
