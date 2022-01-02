package com.fishingbooker.ftn.bom.reservations;

import com.fishingbooker.ftn.bom.DatabaseEntity;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class QuickReservation extends DatabaseEntity {

    @Column(name = "guestLimit", nullable = false)
    private Integer guestLimit;

    @Column(name = "actionStart", nullable = false)
    private LocalDateTime actionStart;

    @Column(name = "actionEnd", nullable = false)
    private LocalDateTime actionEnd;

    @Column(name = "price", nullable = false)
    private Double price = 0.0;

    @Column(name = "isReserved", nullable = false)
    private Boolean isReserved = false;

}
