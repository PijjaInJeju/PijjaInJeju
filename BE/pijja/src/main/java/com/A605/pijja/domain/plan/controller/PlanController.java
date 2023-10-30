package com.A605.pijja.domain.plan.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.util.DefaultUriBuilderFactory;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/plan")
public class PlanController {
    private String tmap_url="https://apis.openapi.sk.com";
    private String place="멀티캠퍼스본사";
    @GetMapping("")
    public String test(){

//        DefaultUriBuilderFactory factory=new DefaultUriBuilderFactory(tmap_url);
//        factory.setEncodingMode(DefaultUriBuilderFactory.EncodingMode.VALUES_ONLY);
//
//        WebClient wc= WebClient.builder()
//                .uriBuilderFactory(factory)
//                .baseUrl(tmap_url)
//                .build();
//        String encodedPlace = URLEncoder.encode("멀티캠퍼스본사", StandardCharsets.UTF_8);
//
//        ResponseEntity<String> result=wc.get()
//                .uri(uriBuilder -> uriBuilder.path("/tmap/pois")
//                        .queryParam("searchKeyword",encodedPlace)
//                        .queryParam("appKey",))


        return "success";
    }
}
