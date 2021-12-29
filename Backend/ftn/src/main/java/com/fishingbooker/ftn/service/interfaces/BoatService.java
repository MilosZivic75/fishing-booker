package com.fishingbooker.ftn.service.interfaces;

import com.fishingbooker.ftn.bom.boats.Boat;
import com.fishingbooker.ftn.dto.BoatDto;
import com.fishingbooker.ftn.dto.EntitySearchDto;

import java.time.LocalDate;
import java.util.List;

public interface BoatService {

    List<Boat> findAll();

    BoatDto findById(long id);

    Long delete(Long id);

    List<Boat> filterByDate(LocalDate startDate, LocalDate endDate);

    List<Boat> findFiltered(EntitySearchDto filterDto);

    Boat get(Long entityId);

}
