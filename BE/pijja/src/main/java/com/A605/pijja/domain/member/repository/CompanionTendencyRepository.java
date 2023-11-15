package com.A605.pijja.domain.member.repository;

import com.A605.pijja.domain.member.entity.CompanionTendency;
import com.A605.pijja.domain.member.entity.Tendency;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanionTendencyRepository extends JpaRepository<CompanionTendency, Long> {

}
