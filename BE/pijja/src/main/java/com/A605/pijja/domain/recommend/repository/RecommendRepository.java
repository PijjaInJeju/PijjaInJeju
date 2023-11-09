package com.A605.pijja.domain.recommend.repository;

import com.A605.pijja.domain.place.entity.Place;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecommendRepository extends JpaRepository<Place, Long>, RecommendRepositoryCustom {
}
