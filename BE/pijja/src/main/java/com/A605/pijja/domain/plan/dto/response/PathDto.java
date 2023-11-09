package com.A605.pijja.domain.plan.dto.response;

import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class PathDto {
    private float latitude;
    private float longitude;
}
