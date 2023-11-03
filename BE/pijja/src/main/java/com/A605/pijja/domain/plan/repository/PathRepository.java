package com.A605.pijja.domain.plan.repository;

import com.A605.pijja.domain.plan.entity.Path;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PathRepository extends JpaRepository<Path,Long>,PathRepositoryCustom {
}
