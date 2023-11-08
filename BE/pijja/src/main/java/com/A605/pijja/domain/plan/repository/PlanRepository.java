package com.A605.pijja.domain.plan.repository;

import com.A605.pijja.domain.plan.entity.Plan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlanRepository extends JpaRepository<Plan,Long>,PlanRepositoryCustom {
}
