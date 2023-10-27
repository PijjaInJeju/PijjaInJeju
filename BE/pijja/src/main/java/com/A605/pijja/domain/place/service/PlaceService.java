package com.A605.pijja.domain.place.service;

import com.A605.pijja.domain.place.dto.response.AllPlacesResponseDto;

import java.util.List;

public interface PlaceService {

    List<AllPlacesResponseDto> allPlaces();
}
