package com.A605.pijja.domain.place.repository;

import com.A605.pijja.domain.place.entity.Place;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class PlaceRepositoryImpl implements PlaceRepositoryCustom {
    private final JPAQueryFactory queryFactory;

    @Override
    public List<Place> allPlaces() {
        return null;
    }
}
