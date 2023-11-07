package com.A605.pijja.global.tmap;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Getter
@Configuration
@PropertySource("classpath:application-API-KEY.properties")
public class TmapConfig {

    @Value("${TMAP_APIKEY}")
    private String tmapApiKey;

    @Value("${TMAP_URL}")
    private String tmapUrl;
}
