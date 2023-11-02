package com.A605.pijja.domain.plan.service;

import com.A605.pijja.domain.plan.dto.request.SearchPlaceFromTmapRequestDto;
import com.A605.pijja.domain.plan.dto.response.SearchPlaceFromTmapResponseDto;
import com.A605.pijja.domain.plan.entity.PlaceTest;
import com.A605.pijja.domain.plan.repository.PlaceTestRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class PlaceTestServiceImpl implements PlaceTestService {

    private final PlaceTestRepository placeTestRepository;


    @Override
    @Transactional(readOnly = true)
    public boolean isPlace(SearchPlaceFromTmapRequestDto requestDto) {
        String placeName= requestDto.getPlace();
        if(placeTestRepository.findByName(placeName)==null){
            return false;
        }
        return true;
    }

    @Override
    @Transactional
    public void addPlace(SearchPlaceFromTmapResponseDto requestDto) {
        PlaceTest place= PlaceTest.builder()
                .name(requestDto.getName())
                .lat(requestDto.getLat())
                .lon(requestDto.getLon()).build();
        placeTestRepository.save(place);
    }

    @Override
    @Transactional(readOnly = true)
    public PlaceTest searchPlace(String name) {
        return placeTestRepository.findByName(name);
    }
}
