package com.A605.pijja.domain.place.service;

import com.A605.pijja.domain.place.dto.request.SearchPlaceRequestDto;
import com.A605.pijja.domain.place.dto.response.AllPlacesResponseDto;
import com.A605.pijja.domain.place.dto.response.PlaceDetailResponseDto;
import com.A605.pijja.domain.place.dto.response.SearchPlaceResponseDto;
import com.A605.pijja.domain.plan.dto.request.SearchPlaceFromTmapRequestDto;

import java.util.List;

public interface PlaceService {

    List<SearchPlaceResponseDto> searchPlace(SearchPlaceRequestDto requestDto);
    List<AllPlacesResponseDto> allPlaces();

    PlaceDetailResponseDto detailPlace(Long placeId);

}
