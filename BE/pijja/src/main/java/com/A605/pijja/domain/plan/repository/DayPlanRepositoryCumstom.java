package com.A605.pijja.domain.plan.repository;

import com.A605.pijja.domain.plan.entity.DayPlan;

import java.util.List;

public interface DayPlanRepositoryCumstom {
    List<DayPlan> findDayPlanListByPlanId(Long id);
}
