package com.A605.pijja.domain.member.repository;

import com.A605.pijja.domain.member.entity.Companion;
import com.A605.pijja.domain.member.entity.MemberCompanion;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MemberCompanionRepository extends JpaRepository<MemberCompanion, Long> {
    List<MemberCompanion> findByCompanion(Companion companion);
}
