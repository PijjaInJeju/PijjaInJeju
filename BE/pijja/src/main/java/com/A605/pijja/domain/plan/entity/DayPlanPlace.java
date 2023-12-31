package com.A605.pijja.domain.plan.entity;

import com.A605.pijja.domain.place.entity.Place;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class DayPlanPlace {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int orderNumber;

    private Boolean isVisited;

    @ManyToOne
    @JoinColumn(name="PLACETEST_ID")
    private Place place;

    @ManyToOne
    @JoinColumn(name="DAYPLAN_ID")
    private DayPlan dayPlan;

    public void assignPlace(Place place){
        this.place=place;
    }

    public void assignDayPlan(DayPlan dayPlan){
        this.dayPlan=dayPlan;
    }
}
