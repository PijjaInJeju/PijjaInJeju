package com.A605.pijja.domain.plan.dto.request;

import lombok.*;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class PlanDetailRequestDto {
    private Long planId;
}
