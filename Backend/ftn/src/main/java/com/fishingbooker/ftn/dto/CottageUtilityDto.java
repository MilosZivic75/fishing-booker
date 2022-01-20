package com.fishingbooker.ftn.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@RequiredArgsConstructor
@AllArgsConstructor
public class CottageUtilityDto {
    private Long id;
    private String name;
    private Double price;
    private Long utilityId;
}
