package com.A605.pijja.domain.recommend.repository;

import com.A605.pijja.domain.place.entity.Place;
import com.A605.pijja.domain.place.entity.QPlace;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class RecommendRepositoryImpl implements RecommendRepositoryCustom {
    private final JPAQueryFactory queryFactory;
    private final QPlace place = new QPlace("place");
    @Override
    public List<Place> findRecommendListByTheme(String tag) {
        return queryFactory.selectFrom(place)
                .where(place.tag.eq(tag))
                .orderBy()
                .fetch();
    }
}
