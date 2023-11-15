package com.A605.pijja.domain.plan.service;

import com.A605.pijja.domain.member.entity.Companion;
import com.A605.pijja.domain.member.entity.Member;
import com.A605.pijja.domain.member.entity.MemberCompanion;
import com.A605.pijja.domain.member.repository.CompanionRepository;
import com.A605.pijja.domain.member.repository.MemberCompanionRepository;
import com.A605.pijja.domain.member.repository.MemberRepository;
import com.A605.pijja.domain.place.entity.Place;
import com.A605.pijja.domain.place.repository.PlaceRepository;
import com.A605.pijja.domain.plan.dto.request.*;
import com.A605.pijja.domain.plan.dto.response.*;
import com.A605.pijja.domain.plan.entity.DayPlan;
import com.A605.pijja.domain.plan.entity.DayPlanPlace;
import com.A605.pijja.domain.plan.entity.Path;
import com.A605.pijja.domain.plan.entity.Plan;
import com.A605.pijja.domain.plan.repository.*;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
@RequiredArgsConstructor
public class PlanServiceImpl implements PlanService {
    private final PlanRepository planRepository;
    private final PathRepository pathRepository;
    private final PathService pathService;
    private final DayPlanRepository dayPlanRepository;
    private final DayPlanPlaceRepository dayPlanPlaceRepository;
    private final CompanionRepository companionRepository;
    private final PlaceRepository placeRepository;
    private final MemberRepository memberRepository;
    private final MemberCompanionRepository memberCompanionRepository;
    @Override
    @Transactional
    public List<PlanGroupingResponseDto> planGrouping(MakePlanRequestDto requestDto) {
        ArrayList<PlanGroupingResponseDto> planGroupingplanList=new ArrayList<>();
        ArrayList<PlanGroupingResponseDto.PlaceDto>[] placeGroup=new ArrayList[requestDto.getTotalDay()];
        HashMap<Long,Integer> map=new HashMap<>();

        for(int i=0;i< placeGroup.length;i++){
            placeGroup[i]=new ArrayList<>();
        }
        int day=0;
        combinationPlan(requestDto.getPlaceList(),new int[2],0,0);

        boolean[] ch=new boolean[requestDto.getPlaceList().size()];

        for(int i=0;i< requestDto.getPlaceList().size();i++){
            Long startPlaceId=requestDto.getPlaceList().get(i).getId();
            if(day>=requestDto.getTotalDay() && !map.containsKey(startPlaceId)){
                continue;
            }
            if(!map.containsKey(startPlaceId)) {
                map.put(startPlaceId, day);
                day+=1;
            }
            for(int j=i+1;j<requestDto.getPlaceList().size();j++){
                Long endPlaceId=requestDto.getPlaceList().get(j).getId();
                double distance=pathRepository.findByStartPlaceAndEndPlace(startPlaceId,endPlaceId).getDistance();

                if(distance<=20000){
                    int tempDay=map.get(startPlaceId);
                    map.put(endPlaceId,tempDay);
                }
            }
        }
        System.out.println(map);

        for(int i=0;i<requestDto.getPlaceList().size();i++){
            Long nowPlaceId=requestDto.getPlaceList().get(i).getId();
            int targetDay=0;
            double min=Double.MAX_VALUE;
            if(!map.containsKey(nowPlaceId)){
                for(Long key:map.keySet()){
                    double distance=pathRepository.findByStartPlaceAndEndPlace(nowPlaceId,key).getDistance();
                    if(min>distance){
                        min=distance;
                        targetDay=map.get(key);
                    }
                }
                map.put(nowPlaceId,targetDay);
            }

        }
        System.out.println(map);
        for(int i=0;i<requestDto.getPlaceList().size();i++){

            int nowDay=map.get(requestDto.getPlaceList().get(i).getId());
            placeGroup[nowDay].add(PlanGroupingResponseDto.PlaceDto.builder()
                    .id(requestDto.getPlaceList().get(i).getId())
                    .build());

        }
        for(int i=0;i< requestDto.getTotalDay();i++){
            planGroupingplanList.add(PlanGroupingResponseDto.builder()
                    .day(i+1)
                    .placeList(placeGroup[i]).build());
        }

        return planGroupingplanList;
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
    public MakePlanResonseDto makePlan(MakePlanRequestDto requestDto) throws JsonProcessingException {
        List<MakePlanResonseDto.PlanDto> planList=new ArrayList<>();
        Companion companion=companionRepository.findById(requestDto.getCompanionId()).get();
        Plan plan=Plan.builder()
                .name(requestDto.getName())
                .endDay(companion.getEndDay())
                .companion(companion)
                .startDay(companion.getStartDay())
                .dayPlanList(new ArrayList<>())
                .build();
        planRepository.save(plan);


        List<PlanGroupingResponseDto> planGroupingResponse = planGrouping(requestDto);

        for(int i=0;i<planGroupingResponse.size();i++){
            PlanGroupingResponseDto planGroup=planGroupingResponse.get(i);
            List<PlanGroupingResponseDto.PlaceDto> dayPlanPlaceList=planGroup.getPlaceList();
            List<GetRouteTmapRequestDto> pathCombinationRequest=new ArrayList<>();

            for(int j=0;j<dayPlanPlaceList.size();j++){
                pathCombinationRequest.add(GetRouteTmapRequestDto.builder()
                        .id(dayPlanPlaceList.get(j).getId())
                        .build());
            }
            PriorityQueue<KruskalRequestDto> pq=pathService.combination(pathCombinationRequest,new int[2],0,0, pathCombinationRequest.size(),new PriorityQueue<>());
            GetRouteResponseDto kruskalResponse=pathService.kruskal(pq,pathCombinationRequest);
            ObjectMapper objectMapper = new ObjectMapper();
//            String jsonPath=objectMapper.writeValueAsString(kruskalResponse.getPathList() );


            DayPlan dayPlan= DayPlan.builder()
                    .day(planGroup.getDay())
                    .dayPlanPlaceList(new ArrayList<>())
                    .plan(plan)
//                    .path(jsonPath)
                    .build();
//            dayPlanRepository.save(dayPlan);
            plan.addPlanAndDayPlan(dayPlan);
            List<MakePlanResonseDto.PlaceDto> placeDtoList=new ArrayList<>();
            for(int j=0;j<kruskalResponse.getPlaceList().size();j++){
                Place place=placeRepository.findById(kruskalResponse.getPlaceList().get(j).getId()).get();
                DayPlanPlace dayPlanPlace= DayPlanPlace.builder()
                        .place(place)
                        .orderNumber(j)
                        .dayPlan(dayPlan)
                        .build();
//                dayPlanPlaceRepository.save(dayPlanPlace);
                dayPlan.addDayPlan(dayPlanPlace);
                place.addDayPlanPlace(dayPlanPlace);
                MakePlanResonseDto.PlaceDto placeDto=MakePlanResonseDto.PlaceDto.builder()
                        .id(place.getId())
                        .title(place.getTitle())
                        .address(place.getAddress())
                        .build();
                placeDtoList.add(placeDto);
            }
            if(kruskalResponse.getPlaceList().size()==0) {
                for (int j = 0; j < dayPlanPlaceList.size(); j++) {
                    Place place = placeRepository.findById(dayPlanPlaceList.get(j).getId()).get();
                    DayPlanPlace dayPlanPlace = DayPlanPlace.builder()
                            .place(place)
                            .orderNumber(j)
                            .dayPlan(dayPlan)
                            .build();
//                    dayPlanPlaceRepository.save(dayPlanPlace);
                    dayPlan.addDayPlan(dayPlanPlace);
                    place.addDayPlanPlace(dayPlanPlace);

                    MakePlanResonseDto.PlaceDto placeDto = MakePlanResonseDto.PlaceDto.builder()
                            .id(place.getId())
                            .title(place.getTitle())
                            .address(place.getAddress())
                            .build();
                    placeDtoList.add(placeDto);
                }
            }
            planList.add(MakePlanResonseDto.PlanDto.builder()
                    .day(dayPlan.getDay())
                    .data(placeDtoList)
//                    .pathList(kruskalResponse.getPathList())
                    .build());
        }

        return MakePlanResonseDto.builder()
                .name(requestDto.getName())
                .companionId(requestDto.getCompanionId())
                .planList(planList)
                .build();

    }

    @Override
    @Transactional
    public MakePlanResonseDto completeMakePlan(MakePlanRequestDto requestDto) throws JsonProcessingException {

        return null;
    }

    @Override
    @Transactional
    public MakePlanResonseDto addRecommendPlace(AddRecommendPlaceRequestDto requestDto) {
        Stack<MakePlanResonseDto.PlaceDto> tmpPlaceStack=new Stack<>();
        Place recommendPlace=placeRepository.findById(requestDto.getRecommendPlace().getId()).get();
        Place firstPlace=placeRepository.findById(requestDto.getFirstPlace().getId()).get();
        Place secondPlace=placeRepository.findById(requestDto.getSecondPlace().getId()).get();
        int targetDay= requestDto.getTargetDay()-1;
        List<MakePlanResonseDto.PlaceDto> planTmpList=requestDto.getPlanList().get(targetDay).getData();
        Stack<MakePlanResonseDto.PlaceDto> planStack=new Stack<>();
        List<MakePlanResonseDto.PlaceDto> planList=new ArrayList<>();
        int size=planTmpList.size();
        int firstPlaceIdx=0;
        int secondPlaceIdx=0;
        for(int i=0;i<size;i++){
            if(planTmpList.get(i).getId()== firstPlace.getId()){
                firstPlaceIdx=i;
            }
            if(planTmpList.get(i).getId()== secondPlace.getId()){
                secondPlaceIdx=i;
            }
            planStack.add(planTmpList.get(i));
        }
        for(int i=secondPlaceIdx;i<size;i++){
            tmpPlaceStack.add(planStack.pop());
        }
        planStack.add(MakePlanResonseDto.PlaceDto.builder()
                .address(recommendPlace.getAddress())
                .title(recommendPlace.getTitle())
                .id(recommendPlace.getId()).build());
        while(!tmpPlaceStack.isEmpty()){
            planStack.add(tmpPlaceStack.pop());
        }
        size+=1;
        MakePlanResonseDto.PlaceDto[] places=new MakePlanResonseDto.PlaceDto[size];
        for(int i=size-1;i>=0;i--){
            places[i]=planStack.pop();
        }

        List<MakePlanResonseDto.PlanDto> planRequestList=new ArrayList<>();
        for(int i=0;i<requestDto.getPlanList().size();i++){
            if(i==targetDay){
                List<MakePlanResonseDto.PlaceDto> placeDtoList=new ArrayList<>();
                for(int j=0;j<places.length;j++){
                    placeDtoList.add(MakePlanResonseDto.PlaceDto.builder()
                            .title(places[j].getTitle())
                            .id(places[j].getId())
                            .address(places[j].getAddress()).build());
                }
                planRequestList.add(MakePlanResonseDto.PlanDto.builder()
                        .day(i+1)
                        .data(placeDtoList)
                        .build());
            }else{
                planRequestList.add(requestDto.getPlanList().get(i));
            }
        }
        return MakePlanResonseDto.builder()
                .name(requestDto.getName())
                .companionId(requestDto.getCompanionId())
                .planList(planRequestList)
                .build();
    }

    @Override
    @Transactional
    public List<PlanListResponseDto> planList(PlanListRequestDto requestDto) {
        List<PlanListResponseDto> responseDto=new ArrayList<>();
        Member member=memberRepository.findById(requestDto.getMemberId()).get();
        List<MemberCompanion> companionList=memberCompanionRepository.findByMemberOrderByCompanion_StartDayAsc(member);
        for(int i=0;i<companionList.size();i++){
            Plan plan=planRepository.findByCompanionId(companionList.get(i).getId());

            responseDto.add(PlanListResponseDto.builder()
                    .plan(PlanListResponseDto.PlanDto.builder()
                            .id(plan.getId())
                            .name(plan.getName())
                            .startDay(plan.getStartDay())
                            .endDay(plan.getEndDay())
                            .build())
                    .build());
        }
        return responseDto;
    }
}
