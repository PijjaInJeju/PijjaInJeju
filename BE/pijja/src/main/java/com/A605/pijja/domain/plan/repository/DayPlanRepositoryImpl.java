package com.A605.pijja.domain.plan.repository;

import com.A605.pijja.domain.plan.entity.DayPlan;
import com.A605.pijja.domain.plan.entity.QDayPlan;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class DayPlanRepositoryImpl implements DayPlanRepositoryCumstom{
    private final JPAQueryFactory queryFactory;
    private final QDayPlan dayPlan=new QDayPlan("dayPlan");
    @Override
    public List<DayPlan> findDayPlanListByPlanId(Long id) {
        return queryFactory.selectFrom(dayPlan)
                .where(dayPlan.plan.id.eq(id))
                .fetch();
    }
}
