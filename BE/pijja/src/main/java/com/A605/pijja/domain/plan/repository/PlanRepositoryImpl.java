package com.A605.pijja.domain.plan.repository;

import com.A605.pijja.domain.plan.entity.Plan;
import com.A605.pijja.domain.plan.entity.QPlan;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class PlanRepositoryImpl implements PlanRepositoryCustom{
    private final JPAQueryFactory queryFactory;
    private QPlan plan=new QPlan("plan");

    @Override
    public Plan findByCompanionId(Long companionId) {

        return queryFactory.selectFrom(plan)
                .where(plan.companion.id.eq(companionId))
                .fetchOne();
    }
}
