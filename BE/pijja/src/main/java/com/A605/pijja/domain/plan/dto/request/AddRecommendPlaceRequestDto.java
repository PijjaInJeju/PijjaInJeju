package com.A605.pijja.domain.plan.dto.request;

import com.A605.pijja.domain.plan.dto.response.MakePlanResonseDto;
import lombok.*;

import java.util.List;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class AddRecommendPlaceRequestDto {
    private String name;
    private Long companionId;
    private List<MakePlanResonseDto.PlanDto> planList;
    private MakePlanResonseDto.PlaceDto recommendPlace;
    private MakePlanResonseDto.PlaceDto firstPlace;
    private MakePlanResonseDto.PlaceDto secondPlace;
    private int targetDay;
}
