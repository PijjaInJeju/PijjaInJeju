package com.A605.pijja.domain.place.service;

import com.A605.pijja.domain.place.dto.response.AllPlacesResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PlaceServiceImpl implements PlaceService {
    @Override
    @Transactional(readOnly = true)
    public List<AllPlacesResponseDto> allPlaces() {
        return null;
    }
}
