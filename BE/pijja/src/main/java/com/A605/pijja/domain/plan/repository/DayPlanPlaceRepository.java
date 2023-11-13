package com.A605.pijja.domain.plan.repository;

import com.A605.pijja.domain.plan.entity.DayPlanPlace;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DayPlanPlaceRepository extends JpaRepository<DayPlanPlace,Long>, DayPlanPlaceRepositoryCustom {
}
