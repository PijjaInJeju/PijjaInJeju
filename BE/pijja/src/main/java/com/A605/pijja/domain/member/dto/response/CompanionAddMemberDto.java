package com.A605.pijja.domain.member.dto.response;

import java.time.LocalDateTime;
import java.util.ArrayList;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@Builder
public class CompanionAddMemberDto {

    private String name;

    private Boolean isStart;

    private Boolean isEnd;

    private String mate;

    private String tendency;

    private LocalDateTime startTime;

    private LocalDateTime endTime;

    private ArrayList<Long> memberId;
}
