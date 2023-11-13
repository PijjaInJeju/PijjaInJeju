package com.A605.pijja.domain.place.repository;

import com.A605.pijja.domain.place.entity.Visit;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VisitRepository extends JpaRepository<Visit, Long>, VisitRepositoryCustom {
}
