package com.A605.pijja.domain.place.dto.response;

import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class PlaceDetailResponseDto {
    private Long id;

    private String title;
    private Double latitude;
    private Double longitude;
    private String introduction;
    private String tag;
    private String phoneNumber;
    private String address;
    private String image;

    @Getter
    @Builder
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    @AllArgsConstructor
    public static class VisitDto{
        private Long id;
        private int family;
        private int alone;
        private int friend;
        private int couple;
        private int kid;
    }
}
