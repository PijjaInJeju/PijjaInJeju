package com.A605.pijja.domain.plan.service;

import com.A605.pijja.domain.plan.dto.request.MakePlanRequestDto;
import com.A605.pijja.domain.plan.dto.request.GetRouteTmapRequestDto;
import com.A605.pijja.domain.plan.dto.response.GetRouteTmapResponseDto;
import com.A605.pijja.domain.plan.dto.response.MakePlanResonseDto;
import com.A605.pijja.domain.plan.dto.response.PlanGroupingResponseDto;
import com.A605.pijja.domain.plan.entity.DayPlan;
import com.A605.pijja.domain.plan.entity.DayPlanPlace;
import com.A605.pijja.domain.plan.entity.PlaceTest;
import com.A605.pijja.domain.plan.entity.Plan;
import com.A605.pijja.domain.plan.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PlanServiceImpl implements PlanService {
    private final PlanRepository planRepository;
    private final PathRepository pathRepository;
    private final PathService pathService;
    private final DayPlanRepository dayPlanRepository;
    private final DayPlanPlaceRepository dayPlanPlaceRepository;
    private final PlaceTestRepository placeTestRepository;
    @Override
    @Transactional
    public List<PlanGroupingResponseDto> planGrouping(MakePlanRequestDto requestDto) {
        ArrayList<PlanGroupingResponseDto> planGroupingResponseList=new ArrayList<>();
        ArrayList<MakePlanRequestDto.PlaceDto>[] placeGroup=new ArrayList[requestDto.getTotalDay()];
        for(int i=0;i< placeGroup.length;i++){
            placeGroup[i]=new ArrayList<>();
        }
        int day=0;
        combinationPlan(requestDto.getPlaceList(),new int[2],0,0);
        boolean[] ch=new boolean[requestDto.getPlaceList().size()];
        for(int i=0;i< requestDto.getPlaceList().size();i++){
            if(!ch[i]) {
                placeGroup[day].add(requestDto.getPlaceList().get(i));
                ch[i]=true;
                for (int j = i + 1; j < requestDto.getPlaceList().size(); j++) {
                    float distance=pathRepository.findByStartPlaceAndEndPlace(requestDto.getPlaceList().get(i).getId(),requestDto.getPlaceList().get(j).getId()).getDistance();
                    if(distance<=20000 && !ch[j]){
                        ch[j]=true;
                        placeGroup[day].add(requestDto.getPlaceList().get(j));
                    }
                }
                day+=1;
            }
            if(day>= requestDto.getTotalDay()){
                break;
            }
        }
        for(int i=0;i<requestDto.getPlaceList().size();i++){
            float min=Float.MAX_VALUE;
            int targetDay=0;
            if(!ch[i]){
                for(int j=0;j< requestDto.getTotalDay();j++){
                    for(int k=0;k<placeGroup[j].size();k++){
                        float distance=pathRepository.findByStartPlaceAndEndPlace(requestDto.getPlaceList().get(i).getId(),placeGroup[j].get(k).getId()).getDistance();
                        if(min>distance){
                            min=distance;
                            targetDay=j;
                        }
                    }
                }
                placeGroup[targetDay].add(requestDto.getPlaceList().get(i));
                ch[i]=true;
            }
        }



        for(int i=0;i<day;i++){
            List<PlanGroupingResponseDto.PlaceDto> placeList=new ArrayList<>();
            for(int j=0;j<placeGroup[i].size();j++) {
                placeList.add(PlanGroupingResponseDto.PlaceDto.builder()
                        .id(placeGroup[i].get(j).getId())
                        .build());
            }
            planGroupingResponseList.add(PlanGroupingResponseDto.builder()
                    .day(i+1)
                    .placeOrderList(placeList)
                    .build());
        }
        return planGroupingResponseList;
    }

    @Override
    @Transactional
    public void combinationPlan(List<MakePlanRequestDto.PlaceDto> requestDto, int[] result, int cnt, int start) {
        if(cnt==2){
            List<GetRouteTmapRequestDto> requestTmapList=new ArrayList<>();

            requestTmapList.add(GetRouteTmapRequestDto.builder()
                    .id(requestDto.get(result[0]).getId()).build());
            requestTmapList.add(GetRouteTmapRequestDto.builder()
                    .id(requestDto.get(result[1]).getId()).build());

            GetRouteTmapResponseDto searchResult=pathService.searchRoute(requestDto.get(result[0]).getId(),requestDto.get(result[1]).getId());
            if(searchResult==null){ //티맵 호출 및 db 저장
                pathService.routeSearchTmap(requestTmapList);
                searchResult=pathService.searchRoute(requestDto.get(result[0]).getId(),requestDto.get(result[1]).getId());
            }

            return ;
        }
        for(int i=start;i<requestDto.size();i++){
            result[cnt]=i;
            combinationPlan(requestDto,result,cnt+1,i+1);
        }
    }

    @Override
    @Transactional
    public List<MakePlanResonseDto> makePlan(MakePlanRequestDto requestDto) {
        List<MakePlanResonseDto> responseList=new ArrayList<>();
        Plan plan=Plan.builder()
                .name(requestDto.getName())
                .endDay(requestDto.getEndDay())
                .startDay(requestDto.getStartDay())
                .dayPlanList(new ArrayList<>())
                .build();
        planRepository.save(plan);


        List<PlanGroupingResponseDto> planGroupingResponse = planGrouping(requestDto);

        for(int i=0;i<planGroupingResponse.size();i++){
            PlanGroupingResponseDto planGroup=planGroupingResponse.get(i);
            List<PlanGroupingResponseDto.PlaceDto> dayPlanPlaceList=planGroup.getPlaceOrderList();
            DayPlan dayPlan= DayPlan.builder()
                    .day(planGroup.getDay())
                    .dayPlanPlaceList(new ArrayList<>())
                    .plan(plan)
                    .build();
            dayPlanRepository.save(dayPlan);
            plan.addPlanAndDayPlan(dayPlan);
            List<MakePlanResonseDto.PlaceDto> placeDtoList=new ArrayList<>();
            for(int j=0;j<dayPlanPlaceList.size();j++){
                PlaceTest place=placeTestRepository.findById(dayPlanPlaceList.get(j).getId()).get();
//                PlaceTest place=PlaceTest.builder()
//                        .id(dayPlanPlaceList.get(j).getId())
//                        .dayPlanPlaceList(new ArrayList<>())
//                        .build();
                DayPlanPlace dayPlanPlace= DayPlanPlace.builder()
                        .place(place)
                        .dayPlan(dayPlan)
                        .build();
                dayPlanPlaceRepository.save(dayPlanPlace);
                dayPlan.addDayPlan(dayPlanPlace);
                place.addDayPlanPlace(dayPlanPlace);

                MakePlanResonseDto.PlaceDto placeDto=MakePlanResonseDto.PlaceDto.builder()
                        .id(place.getId())
                        .title(place.getName())
                        .build();
                placeDtoList.add(placeDto);
            }
            responseList.add(MakePlanResonseDto.builder()
                    .title(Integer.toString(dayPlan.getDay())+"일차")
                    .data(placeDtoList)
                    .build());
        }

        return responseList;

    }
}
