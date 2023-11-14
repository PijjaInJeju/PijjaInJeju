package com.A605.pijja.domain.plan.repository;

import com.A605.pijja.domain.plan.entity.Plan;

public interface PlanRepositoryCustom {
    Plan findByCompanionId(Long companionId);
}
