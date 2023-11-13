package com.A605.pijja.domain.plan.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

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

    @OneToMany(mappedBy = "dayPlan")
    private List<DayPlanPlace> dayPlanPlaceList;

    private int day;

    public void assignPlan(Plan plan){
        this.plan=plan;
    }

    @Lob
    @Column(columnDefinition="LONGBLOB")
    private String path;

    public void addDayPlan(DayPlanPlace dayPlanPlace){
        this.dayPlanPlaceList.add(dayPlanPlace);
        dayPlanPlace.assignDayPlan(this);

    }
}
