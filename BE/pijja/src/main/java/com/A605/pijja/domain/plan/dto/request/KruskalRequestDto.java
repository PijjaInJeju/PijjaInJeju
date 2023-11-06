package com.A605.pijja.domain.plan.dto.request;

import lombok.*;

@Getter
@Builder
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class KruskalRequestDto implements Comparable<KruskalRequestDto>{
    private Long place1;
    private Long place2;
    private float dist;
    @Override
    public int compareTo(KruskalRequestDto o){
        return (int) (this.dist-o.dist);
    }
}
