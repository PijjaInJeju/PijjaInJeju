package com.A605.pijja.domain.place.entity;

import com.A605.pijja.domain.plan.entity.DayPlanPlace;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class Place {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private Double latitude;
    private Double longitude;
    private String introduction;
    private String tag;
    private String phoneNumber;
    private String address;
    private String image;
    private String mate1;
    private String mate2;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="VISIT_ID")
    private Visit visit;

    @OneToMany(mappedBy = "place")
    private List<DayPlanPlace> dayPlanPlaceList;

    public void addDayPlanPlace(DayPlanPlace dayPlanPlace){
        this.dayPlanPlaceList.add(dayPlanPlace);
        dayPlanPlace.assignPlace(this);
    }

}
