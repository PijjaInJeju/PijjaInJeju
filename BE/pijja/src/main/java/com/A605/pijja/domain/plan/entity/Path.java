package com.A605.pijja.domain.plan.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Builder
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class Path {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name="STARTPLACE_ID")
    private PlaceTest startPlace;

    @ManyToOne
    @JoinColumn(name="ENDPLACE_ID")
    private PlaceTest endPlace;

    private float distance;

    private Long time;

}
