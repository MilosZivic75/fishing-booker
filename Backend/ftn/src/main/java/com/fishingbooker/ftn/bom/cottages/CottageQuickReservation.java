package com.fishingbooker.ftn.bom.cottages;

import com.fishingbooker.ftn.bom.QuickReservation;
import com.fishingbooker.ftn.bom.Reservation;
import com.sun.xml.bind.v2.model.annotation.Quick;
import lombok.Data;

import javax.persistence.*;
import java.util.Set;

@Entity
@Data
@Table(name = "CottageReservation")
public class CottageQuickReservation extends QuickReservation {

    @ManyToMany
    @JoinTable(
            name = "cottage_quick_reservation_utility",
            joinColumns = @JoinColumn(name = "cottage_reservation_id"),
            inverseJoinColumns = @JoinColumn(name = "cottage_utility_id"))
    private Set<CottageUtility> utilities;

    @ManyToOne
    @JoinColumn(name = "cottage_id")
    private Cottage cottage;

}
