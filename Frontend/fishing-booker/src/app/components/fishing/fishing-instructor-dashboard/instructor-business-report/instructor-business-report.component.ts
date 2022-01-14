import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../service/admin.service';

@Component({
  selector: 'app-instructor-business-report',
  templateUrl: './instructor-business-report.component.html',
  styleUrls: ['./instructor-business-report.component.css']
})
export class InstructorBusinessReportComponent implements OnInit {

  startDate=new Date();
  endDate=new Date();
  reservations:any=[]
  price=0;
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.getBusinessReport().subscribe(data=>{
      this.reservations=data;
      this.calculatePrice();
    })
  }

  calculatePrice(){
    this.price=0;
    this.reservations.forEach((element:any) => {
      this.price+=element.price;
    });
  }

  search(){
    console.log(this.startDate);
    console.log(this.endDate);
    this.adminService.getBusinessReportInDate(new Date(this.startDate),new Date(this.endDate)).subscribe(data=>{
      this.reservations.length=0;
      this.reservations=data;
      this.calculatePrice();
    });
  }

}
