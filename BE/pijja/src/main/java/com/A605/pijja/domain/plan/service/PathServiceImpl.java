package com.A605.pijja.domain.plan.service;

import com.A605.pijja.domain.plan.dto.response.GetRouteTmapResponseDto;
import com.A605.pijja.domain.plan.entity.Path;
import com.A605.pijja.domain.plan.entity.PlaceTest;
import com.A605.pijja.domain.plan.repository.PathRepository;
import com.A605.pijja.domain.plan.repository.PlaceTestRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PathServiceImpl implements PathService {
    private final PathRepository pathRepository;
    private final PlaceTestRepository placeTestRepository;


    @Override
    @Transactional(readOnly = true)
    public GetRouteTmapResponseDto searchRoute(List<PlaceTest> request) {
        Path path=pathRepository.findByStartPlaceAndEndPlace(request.get(0).getId(),request.get(1).getId());

        return GetRouteTmapResponseDto.builder()
                .distance(path.getDistance())
                .time(path.getTime())
                .build();
    }

    @Override
    @Transactional
    public void addPath(List<Long> requestDto) {
        PlaceTest startPlace=placeTestRepository.findById(requestDto.get(0)).get();
        PlaceTest endPlace=placeTestRepository.findById(requestDto.get(1)).get();
        Path newPath=Path.builder()
                .startPlace(startPlace)
                .endPlace(endPlace)
                .build();       

    }








    public void combination(PlaceTest[] result,List<PlaceTest> placeList,int start,int cnt){
        if(cnt==2){
            return ;
        }
        for(int i=start;i<placeList.size();i++){
            result[cnt]=placeList.get(i);
            combination(result,placeList,i+1,cnt+1);
        }

    }


}
