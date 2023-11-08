package com.A605.pijja.domain.plan.dto.request;

import com.A605.pijja.domain.plan.dto.response.PlaceDto;
import lombok.*;

import java.time.LocalDate;
import java.util.ArrayList;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class DayGroupingRequestDto {
    private LocalDate startDay;
    private LocalDate endDay;
    private int totalDay;
    private String mate;
    private String  tendency;
    private ArrayList<PlaceDto> placeList;

}
