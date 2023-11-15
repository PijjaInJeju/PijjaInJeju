package com.A605.pijja.domain.recommend.dto.response;

import com.A605.pijja.domain.plan.dto.response.PathDto;
import lombok.*;

import java.util.List;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class travelPathDto {
    private float maxLatitude, minLatitude, maxLongitude, minLongitude;
    private List<PathDto> pathList;
}
