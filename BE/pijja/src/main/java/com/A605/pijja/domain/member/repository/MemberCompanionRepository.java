package com.A605.pijja.domain.member.repository;

import com.A605.pijja.domain.member.entity.Companion;
import com.A605.pijja.domain.member.entity.Member;
import com.A605.pijja.domain.member.entity.MemberCompanion;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberCompanionRepository extends JpaRepository<MemberCompanion, Long> {

    List<MemberCompanion> findByCompanion(Companion companion);

    List<MemberCompanion> findByMember(Member member);

    MemberCompanion findByMemberAndCompanion(Member member, Companion companion);
}
