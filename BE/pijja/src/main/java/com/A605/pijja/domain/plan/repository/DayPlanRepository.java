package com.A605.pijja.domain.plan.repository;

import com.A605.pijja.domain.plan.entity.DayPlan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DayPlanRepository extends JpaRepository<DayPlan,Long>,DayPlanRepositoryCumstom {
}
