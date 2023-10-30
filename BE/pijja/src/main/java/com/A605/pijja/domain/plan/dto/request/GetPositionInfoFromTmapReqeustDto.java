package com.A605.pijja.domain.plan.dto.request;

import lombok.*;

import java.util.List;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class GetPositionInfoFromTmapReqeustDto {
    private String place;
}
