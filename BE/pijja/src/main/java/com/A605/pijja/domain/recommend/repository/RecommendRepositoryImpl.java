package com.A605.pijja.domain.recommend.repository;

import com.A605.pijja.domain.member.entity.QCompanion;
import com.A605.pijja.domain.place.entity.Place;
import com.A605.pijja.domain.place.entity.QPlace;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.Collections;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class RecommendRepositoryImpl implements RecommendRepositoryCustom {
    private final JPAQueryFactory queryFactory;
    private final QPlace place = new QPlace("place");
    private final QCompanion companion = new QCompanion("companion");

    @Override
    public List<Place> findRecommendListByTheme(String tag, String mate) {
        List<Place> result;
        if("가족".equals(mate)){
            result = queryFactory.selectFrom(place)
                    .where(place.tag.eq(tag).and(place.visit.family.eq(1)))
                    .orderBy(place.visit.family.desc())
                    .fetch();
        } else if("혼자".equals(mate)){
            result = queryFactory.selectFrom(place)
                    .where(place.tag.eq(tag).and(place.visit.alone.eq(1)))
                    .orderBy(place.visit.alone.desc())
                    .fetch();
        } else if("친구".equals(mate)){
            result = queryFactory.selectFrom(place)
                    .where(place.tag.eq(tag).and(place.visit.friend.eq(1)))
                    .orderBy(place.visit.friend.desc())
                    .fetch();
        } else if("연인".equals(mate)){
            result = queryFactory.selectFrom(place)
                    .where(place.tag.eq(tag).and(place.visit.couple.eq(1)))
                    .orderBy(place.visit.couple.desc())
                    .fetch();
        } else if("아이".equals(mate)){
            result = queryFactory.selectFrom(place)
                    .where(place.tag.eq(tag).and(place.visit.kid.eq(1)))
                    .orderBy(place.visit.kid.desc())
                    .fetch();
        } else {
            result = Collections.emptyList(); // 그 외의 경우 빈 리스트 반환
        }
        return result;
    }
}