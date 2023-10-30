package com.A605.pijja.domain.place.service;

import com.A605.pijja.domain.place.dto.response.AllPlacesResponseDto;
import com.A605.pijja.domain.place.dto.response.PlaceDetailResponseDto;
import com.A605.pijja.domain.place.entity.Place;
import com.A605.pijja.domain.place.repository.PlaceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PlaceServiceImpl implements PlaceService {
    private final PlaceRepository placeRepository;
    @Override
    @Transactional(readOnly = true)
    public List<AllPlacesResponseDto> allPlaces() {
        List<Place> placeList = placeRepository.findAll();
        List<AllPlacesResponseDto> responseDtoList = placeList.stream()
                .map(place -> AllPlacesResponseDto.builder()
                        .id(place.getId())
                        .title(place.getTitle())
                        .latitude(place.getLatitude())
                        .longitude(place.getLongitude())
                        .tag(place.getTag())
                        .address(place.getAddress())
                        .image(place.getImage())
                        .build()
                )
                .collect(Collectors.toList());
        return responseDtoList;
    }

    @Override
    public List<PlaceDetailResponseDto> detailPlace(Long placeId) {

        return null;
    }
}
