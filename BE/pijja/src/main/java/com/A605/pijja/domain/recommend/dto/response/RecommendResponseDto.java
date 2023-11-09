package com.A605.pijja.domain.recommend.dto.response;

import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class RecommendResponseDto {
    private Long id;

    private String title;
    private Double latitude;
    private Double longitude;
    private String tag;
    private String image;

    @Getter
    @Builder
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    @AllArgsConstructor
    public static class CompanionDto{
        private Long id;
        private String mate;
    }
}
