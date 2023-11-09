package com.A605.pijja.domain.plan.service;

import com.A605.pijja.domain.plan.dto.request.MakePlanRequestDto;
import com.A605.pijja.domain.plan.dto.request.GetRouteTmapRequestDto;
import com.A605.pijja.domain.plan.dto.response.GetRouteTmapResponseDto;
import com.A605.pijja.domain.plan.entity.DayPlan;
import com.A605.pijja.domain.plan.entity.Plan;
import com.A605.pijja.domain.plan.repository.DayPlanRepository;
import com.A605.pijja.domain.plan.repository.PathRepository;
import com.A605.pijja.domain.plan.repository.PlanRepository;
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
    @Override
    public void planGrouping(MakePlanRequestDto requestDto) {
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
            for(int j=0;j<placeGroup[i].size();j++) {
                System.out.print(placeGroup[i].get(j).getId() + " ");
            }
            System.out.println();
        }

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
    public void makePlan(MakePlanRequestDto requestDto) {
        Plan plan=Plan.builder()
                .name(requestDto.getName())
                .endDay(requestDto.getEndDay())
                .startDay(requestDto.getStartDay())
                .dayPlanList(new ArrayList<>())
                .build();
        planRepository.save(plan);
        planGrouping(requestDto);

        

    }
}
