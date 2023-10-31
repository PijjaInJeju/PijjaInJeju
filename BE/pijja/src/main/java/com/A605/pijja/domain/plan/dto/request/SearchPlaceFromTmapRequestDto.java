package com.A605.pijja.domain.plan.dto.request;

import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class SearchPlaceFromTmapRequestDto {
    private String place;
}
