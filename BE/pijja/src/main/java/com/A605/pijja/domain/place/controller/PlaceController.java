package com.A605.pijja.domain.place.controller;

import com.A605.pijja.domain.place.dto.response.AllPlacesResponseDto;
import com.A605.pijja.domain.place.dto.response.PlaceDetailResponseDto;
import com.A605.pijja.domain.place.service.PlaceService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/places")
public class PlaceController {
    private final PlaceService placeService;

    @GetMapping("")
    public List<AllPlacesResponseDto> allPlaces(){
        return placeService.allPlaces();
    }

    @GetMapping("/{placeId}")
    public PlaceDetailResponseDto detailResponse(@PathVariable Long placeId){
        return placeService.detailPlace(placeId);
    }

}
