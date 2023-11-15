package com.A605.pijja.domain.recommend.dto.request;

import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class RecommendRequestDto {
    private Long departures_id, arrivals_id, companion_id;
    private String mate, tag;
}