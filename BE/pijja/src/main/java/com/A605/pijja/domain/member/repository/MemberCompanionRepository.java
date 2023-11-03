package com.A605.pijja.domain.member.repository;

import com.A605.pijja.domain.member.entity.Companion;
import com.A605.pijja.domain.member.entity.MemberCompanion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MemberCompanionRepository extends JpaRepository<MemberCompanion, Long> {
    List<MemberCompanion> findByCompanion(Companion companion);
}