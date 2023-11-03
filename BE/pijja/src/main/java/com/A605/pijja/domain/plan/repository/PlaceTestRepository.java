package com.A605.pijja.domain.plan.repository;

import com.A605.pijja.domain.plan.entity.PlaceTest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlaceTestRepository extends JpaRepository<PlaceTest,Long>, PlaceTestRepositoryCustom {
    PlaceTest findByName(String name);
}
