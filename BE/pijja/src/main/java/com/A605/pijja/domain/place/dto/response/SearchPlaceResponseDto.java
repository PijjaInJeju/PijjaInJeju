package com.A605.pijja.domain.place.dto.response;

import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class SearchPlaceResponseDto {
    Long id;
    String title;
    String address;
}
