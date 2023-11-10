package com.A605.pijja.domain.member.repository;

import com.A605.pijja.domain.member.entity.MemberCompanion;
import com.A605.pijja.domain.member.entity.Tendency;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TendencyRepository extends JpaRepository<Tendency, Long> {
    Tendency findBytendencyType(String tendency);
}
