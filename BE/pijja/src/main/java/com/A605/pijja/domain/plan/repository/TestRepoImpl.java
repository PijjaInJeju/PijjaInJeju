package com.A605.pijja.domain.plan.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class TestRepoImpl implements TestRepo2{
    private final JPAQueryFactory queryFactory;

    @Override
    public void testR(){

    }
}
