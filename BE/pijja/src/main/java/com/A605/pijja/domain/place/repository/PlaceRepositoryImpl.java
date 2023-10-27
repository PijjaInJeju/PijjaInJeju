package com.A605.pijja.domain.place.repository;

import com.A605.pijja.domain.place.entity.Place;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class PlaceRepositoryImpl implements PlaceRepositoryCustom {
    private final JPAQueryFac
    @Override
    public List<Place> allPlaces() {
        return null;
    }
}
