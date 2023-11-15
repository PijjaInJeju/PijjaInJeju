package com.A605.pijja.domain.plan.entity;

import com.A605.pijja.domain.member.entity.Companion;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class Plan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private LocalDate startDay;

    private LocalDate endDay;
    private Long isLike;

    @OneToOne
    @JoinColumn(name = "COMPANION_ID")
    private Companion companion;

    @OneToMany(mappedBy="plan")
    private List<DayPlan> dayPlanList=new ArrayList<>();

    public void addPlanAndDayPlan(DayPlan dayPlan){
        this.dayPlanList.add(dayPlan);
        dayPlan.assignPlan(this);
    }

    public void assignCompanion(Companion companion){
        this.companion=companion;
        companion.assignPlan(this);
    }
}
