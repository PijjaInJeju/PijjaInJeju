package com.A605.pijja.domain.plan.repository;

import com.A605.pijja.domain.plan.entity.TestTable;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.repository.JpaRepository;


public interface TestTableRepository extends JpaRepository<TestTable,Long> {
}
