package com.fishingbooker.ftn.bom.boats;

import com.fishingbooker.ftn.bom.Reservation;
import com.fishingbooker.ftn.bom.adventures.Adventure;
import lombok.Data;

import javax.persistence.*;
import java.util.Set;

@Entity
@Data
@Table(name = "BoatReservation")
public class BoatReservation extends Reservation {

    @ManyToOne
    @JoinColumn(name = "boat_id")
    private Boat boat;

    @ManyToMany
    @JoinTable(
            name = "boat_quick_reservation_utility",
            joinColumns = @JoinColumn(name = "boat_reservation_id"),
            inverseJoinColumns = @JoinColumn(name = "boat_utility_id"))
    private Set<BoatUtility> utilities;

}
