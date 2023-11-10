package com.A605.pijja.domain.recommend.repository;

import com.A605.pijja.domain.place.entity.Place;

import java.util.List;

public interface RecommendRepositoryCustom {
    //public List<Place> findRecommendListByTheme(String tag);
    public List<Place> findRecommendListByTheme(String tag, String mate);
}
