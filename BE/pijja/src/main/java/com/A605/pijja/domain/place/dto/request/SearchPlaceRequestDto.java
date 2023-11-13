package com.A605.pijja.domain.place.dto.request;

import lombok.*;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class SearchPlaceRequestDto {
    String title;
}
