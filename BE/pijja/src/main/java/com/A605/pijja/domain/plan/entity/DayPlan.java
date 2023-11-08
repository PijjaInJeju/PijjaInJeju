package com.A605.pijja.domain.plan.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class DayPlan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name="PLAN_ID")
    private Plan plan;

    private int day;

    public void assignPlan(Plan plan){
        this.plan=plan;
    }
}
