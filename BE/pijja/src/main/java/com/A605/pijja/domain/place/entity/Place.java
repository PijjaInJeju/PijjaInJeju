package com.A605.pijja.domain.place.entity;

import jakarta.persistence.*;
import lombok.*;

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

    @OneToOne
    @JoinColumn(name="VISIT_ID")
    private Visit visit;
}
