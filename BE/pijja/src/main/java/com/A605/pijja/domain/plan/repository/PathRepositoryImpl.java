package com.A605.pijja.domain.plan.repository;

import com.A605.pijja.domain.plan.entity.Path;
import com.A605.pijja.domain.plan.entity.QPath;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class PathRepositoryImpl implements PathRepositoryCustom{
    private final JPAQueryFactory queryFactory;
    private final QPath path=new QPath("path");
    @Override
    public Path findByStartPlaceAndEndPlace(Long startPlaceId, Long endPlaceId) {
        return queryFactory
                .selectFrom(path)
                .where((path.endPlace.id.eq(endPlaceId).and(path.startPlace.id.eq(startPlaceId)))
                        .or((path.startPlace.id.eq(endPlaceId).and(path.endPlace.id.eq(startPlaceId)))))
                .fetchOne();
    }
}
