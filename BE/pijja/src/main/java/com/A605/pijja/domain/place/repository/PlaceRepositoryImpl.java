package com.A605.pijja.domain.place.repository;

import com.A605.pijja.domain.place.entity.Place;
import com.A605.pijja.domain.place.entity.QPlace;
import com.A605.pijja.domain.plan.entity.QPlan;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class PlaceRepositoryImpl implements PlaceRepositoryCustom {
    private final JPAQueryFactory queryFactory;
    private QPlace place = new QPlace("place");

}
