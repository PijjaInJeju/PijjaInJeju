package com.A605.pijja.domain.place.dto.response;

import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class AllPlacesResponseDto {
    private Long id;
    private String title;
    private Double latitude;
    private Double longitude;
    private String tag;
    private String address;
    private String image;


}
