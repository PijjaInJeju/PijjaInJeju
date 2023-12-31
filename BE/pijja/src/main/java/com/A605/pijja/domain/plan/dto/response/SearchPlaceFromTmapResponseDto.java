package com.A605.pijja.domain.plan.dto.response;

import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class SearchPlaceFromTmapResponseDto {
    private String name;
    private Float lat;
    private Float lon;
    private String middleAddrName;
    private String lowerAddrName;
}
