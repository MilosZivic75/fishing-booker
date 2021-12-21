package com.fishingbooker.ftn.conversion.dto;

import com.fishingbooker.ftn.bom.users.ApplicationRole;
import com.fishingbooker.ftn.bom.users.FishingInstructor;
import com.fishingbooker.ftn.dto.FishingInstructorDto;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class FishingInstructorToDtoConverter implements Converter<FishingInstructor, FishingInstructorDto> {
    @Override
    public FishingInstructorDto convert(FishingInstructor source) {
        FishingInstructorDto dto = new FishingInstructorDto();
        dto.setId(source.getId());
        dto.setPassword(source.getPassword());
        dto.setName(source.getName());
        dto.setLastName(source.getLastName());
        dto.setEmail(source.getEmail());
        dto.setFullAddress(source.getUserAddress().toString());
        dto.setPhone(source.getPhone());
        dto.setRole(ApplicationRole.toString(source.getRole()));
        dto.setEnabled(source.getEnabled());
        dto.setStreet(source.getUserAddress().getStreet());
        dto.setCountry(source.getUserAddress().getCountry());
        dto.setCity(source.getUserAddress().getCity());
        dto.setBiography(source.getBiography());
        dto.setRating(source.getRating());
        return dto;
    }
}
