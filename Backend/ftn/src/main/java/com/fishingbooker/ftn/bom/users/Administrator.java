package com.fishingbooker.ftn.bom.users;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Data
@Table(name = "Administrator")
public class Administrator extends ApplicationUser {

}
