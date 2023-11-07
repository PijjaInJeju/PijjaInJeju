package com.A605.pijja.global.time;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Date;
import lombok.Getter;
import org.springframework.stereotype.Service;

@Getter
@Service
public class TimeUtil {

    public LocalDate getCurrentLocalDate() {
        Date date = new Date();
        return date.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
    }
}
