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
    @Transactional(readOnly = true) //해당 place가 placetest db에 있는지
    public boolean isPlace(SearchPlaceFromTmapRequestDto requestDto) {
        String placeName= requestDto.getPlace().replaceAll(" ","");

        if(placeTestRepository.findByName(placeName)==null){
            return false;
        }
        return true;
    }

    @Override
    @Transactional //해당 place를 placetest db에 삽입
    public void addPlace(SearchPlaceFromTmapResponseDto requestDto) {
        PlaceTest place= PlaceTest.builder()
                .name(requestDto.getName())
                .lat(requestDto.getLat())
                .lon(requestDto.getLon()).build();
        placeTestRepository.save(place);
    }

    @Override
    @Transactional(readOnly = true) //place search
    public PlaceTest searchPlace(String name) {
        return placeTestRepository.findByName(name);
    }
}
