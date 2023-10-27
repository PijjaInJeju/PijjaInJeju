package com.A605.pijja.domain.place.repository;

import com.A605.pijja.domain.place.entity.Place;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PlaceRepository extends JpaRepository<Place, Long>, PlaceRepositoryCustom{
}
