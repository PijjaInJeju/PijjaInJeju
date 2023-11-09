package com.A605.pijja.domain.plan.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class PlaceTest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private float lat;

    private float lon;

    @OneToMany(mappedBy = "place")
    private List<DayPlanPlace> dayPlanPlaceList;

    public void addDayPlanPlace(DayPlanPlace dayPlanPlace){
        this.dayPlanPlaceList.add(dayPlanPlace);
        dayPlanPlace.assignPlace(this);
    }
}
