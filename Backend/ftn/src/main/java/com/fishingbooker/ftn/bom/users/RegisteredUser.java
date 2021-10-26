package com.fishingbooker.ftn.bom.users;

import com.fishingbooker.ftn.bom.boats.Boat;
import com.fishingbooker.ftn.bom.cottages.Cottage;
import lombok.Data;

import javax.persistence.*;
import java.util.Set;

@Entity
@Data
@Table(name = "RegisteredUser")
public class RegisteredUser extends ApplicationUser {

    @Column(name = "isBlocked", nullable = false)
    private Boolean isBlocked = false;

    @Column(name = "penalties", nullable = false)
    private Integer penalties = 0;

    @ManyToMany
    @JoinTable(
            name = "user_boat_subscription",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "boat_id"))
    private Set<Boat> boatSubscription;

    @ManyToMany
    @JoinTable(
            name = "user_cottage_subscription",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "cottage_id"))
    private Set<Cottage> cottageSubscription;

    @ManyToMany
    @JoinTable(
            name = "user_instructor_subscription",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "instructor_id"))
    private Set<FishingInstructor> instructorSubscription;

}
