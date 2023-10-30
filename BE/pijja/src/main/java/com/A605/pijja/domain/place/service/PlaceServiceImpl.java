package com.A605.pijja.domain.place.service;

import com.A605.pijja.domain.place.dto.response.AllPlacesResponseDto;
import com.A605.pijja.domain.place.dto.response.PlaceDetailResponseDto;
import com.A605.pijja.domain.place.entity.Place;
import com.A605.pijja.domain.place.entity.Visit;
import com.A605.pijja.domain.place.repository.PlaceRepository;
import com.A605.pijja.domain.place.repository.VisitRepository;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PlaceServiceImpl implements PlaceService {
    private final PlaceRepository placeRepository;
    private final VisitRepository visitRepository;
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
    public PlaceDetailResponseDto detailPlace(Long placeId) {
        Place place = placeRepository.findById(placeId).get();
        Visit visit = place.getVisit();
        int visitFamily=visit.getFamily();
        int visitAlone=visit.getAlone();
        int visitFriend=visit.getFriend();
        int visitCouple=visit.getCouple();
        int visitKid=visit.getKid();

        class Node1{
            String type;
            int value;
            public Node1(String type, int value){
                this.type = type;
                this.value = value;
            }
        }

        enum Node2 {
            FAMILY("가족"), ALONE("혼자"), FRIEND("친구"), COUPLE("커플"), KID("아이");

            @Getter
            private String type;

            Node2 (String type){
                this.type = type;
            }
        }




        PlaceDetailResponseDto responseDto=PlaceDetailResponseDto.builder()
                .title(place.getTitle())
                .latitude(place.getLatitude())
                .longitude(place.getLongitude())
                .introduction(place.getIntroduction())
                .tag(place.getTag())
                .phoneNumber(place.getPhoneNumber())
                .address(place.getAddress())
                .image(place.getImage())
                .build();
        return responseDto;
    }
}
