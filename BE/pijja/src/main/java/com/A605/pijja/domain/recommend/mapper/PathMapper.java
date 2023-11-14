package com.A605.pijja.domain.recommend.mapper;

import com.A605.pijja.domain.plan.dto.response.PathDto;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PathMapper {
    PathDto longitudeAndLatitudeToPathDto(float latitude, float longitude);

}
