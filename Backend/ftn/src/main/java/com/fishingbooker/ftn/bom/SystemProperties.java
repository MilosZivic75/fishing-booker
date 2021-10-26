package com.fishingbooker.ftn.bom;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Data
@Table(name = "SystemProperties")
public class SystemProperties extends DatabaseEntity {

    @Column(name = "incomePercentage", nullable = false)
    private Double incomePercentage;

}
