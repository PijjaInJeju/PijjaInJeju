package com.A605.pijja.domain.plan.dto.response;

import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class GetPositionInfoFromTmapResponseDto {
    private String name;
    private String lat;
    private String lon;
}
