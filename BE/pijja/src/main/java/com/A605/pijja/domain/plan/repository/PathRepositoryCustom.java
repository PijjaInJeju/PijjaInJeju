package com.A605.pijja.domain.plan.repository;

import com.A605.pijja.domain.plan.entity.Path;

public interface PathRepositoryCustom {
    Path findByStartPlaceAndEndPlace(Long startPlaceId,Long endPlaceId);
}
