package com.A605.pijja.domain.member.repository;

import com.A605.pijja.domain.member.entity.Companion;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CompanionRepository extends JpaRepository<Companion, Long> {

    Optional<Companion> findByCode(String code);
}
