package com.A605.pijja.domain.place.service;

import com.A605.pijja.domain.place.dto.response.AllPlacesResponseDto;
import com.A605.pijja.domain.place.dto.response.PlaceDetailResponseDto;
import com.A605.pijja.domain.place.entity.Place;
import com.A605.pijja.domain.place.entity.Visit;
import com.A605.pijja.domain.place.repository.PlaceRepository;
import com.A605.pijja.domain.place.repository.VisitRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
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

        class Node1{
            String type;
            int value;
            public Node1(String type, int value){
                this.type = type;
                this.value = value;
            }
        }

//        Node1 visitFamily= new Node1("가족", visit.getFamily());
//        Node1 visitAlone= new Node1("혼자", visit.getAlone());
//        Node1 visitFriend= new Node1("친구", visit.getFriend());
//        Node1 visitCouple= new Node1("커플", visit.getCouple());
//        Node1 visitKid= new Node1("아이", visit.getKid());

//        PriorityQueue<Node1> q = new PriorityQueue<>((o1, o2) -> {
////            if(o1.value == o2.value){
////                //뭔가를 하기
////            }
//            return o2.value - o1.value;
//        });

        ArrayList<Node1> list = new ArrayList<>();
        list.add( new Node1("가족", visit.getFamily()));
        list.add( new Node1("혼자", visit.getAlone()));
        list.add( new Node1("친구", visit.getFriend()));
        list.add( new Node1("커플", visit.getCouple()));
        list.add( new Node1("아이", visit.getKid()));


        Collections.sort(list, new Comparator<Node1>() {
            @Override
            public int compare(Node1 o1, Node1 o2) {
                return o2.value - o1.value;
            }
        });



        PlaceDetailResponseDto responseDto=PlaceDetailResponseDto.builder()
                .id(placeId)
                .title(place.getTitle())
                .latitude(place.getLatitude())
                .longitude(place.getLongitude())
                .introduction(place.getIntroduction())
                .tag(place.getTag())
                .phoneNumber(place.getPhoneNumber())
                .address(place.getAddress())
                .image(place.getImage())
                .type1(list.get(0).type)
                .type2(list.get(1).type)
                .build();

//        place.getMate1().replace(place.getMate1(), list.get(0).type);
//        place.getMate2().replace(place.getMate2(), list.get(1).type);

        return responseDto;
    }
}
