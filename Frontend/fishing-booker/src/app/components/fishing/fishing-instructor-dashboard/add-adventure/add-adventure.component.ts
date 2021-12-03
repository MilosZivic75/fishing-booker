import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CreateAdventureModel } from 'src/app/model/create-adventure-model';
import { Image } from 'src/app/model/image-model';
import { Utility } from 'src/app/model/utility-model';
import { UtilityService } from 'src/app/service/utility.service';

@Component({
  selector: 'app-add-adventure',
  templateUrl: './add-adventure.component.html',
  styleUrls: ['./add-adventure.component.css']
})
export class AddAdventureComponent implements OnInit {

  adventure:CreateAdventureModel=new CreateAdventureModel();
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });
  rule:string='';
  equipment:string='';
  selectedService='';
  newService='';
  price=0;
  validForm=true;
  utilities:any=[];
  constructor(private http: HttpClient,private utilityService:UtilityService) { }

  ngOnInit(): void {
    this.utilityService.getUtilities().subscribe((data:any)=>this.utilities=data);
  }

  get f(){
    return this.myForm.controls;
  }

  onFileChange(event:any) {
    if (event.target.files && event.target.files[0]) {
        var filesAmount = event.target.files.length;
        for (let i = 0; i < filesAmount; i++) {
                var reader = new FileReader();
                var name=event.target.files[0].name;
                reader.onload = (event:any) => {
                  console.log(event.target.result);
                   let image:Image=new Image();
                   image.content=event.target.result;
                   image.extension=this.getExtension(event.target.result);
                   image.name=name;
                   this.adventure.images.push(image); 
                   this.myForm.patchValue({
                      fileSource: this.adventure.images
                   });
                }
                reader.readAsDataURL(event.target.files[i]);
        }
    }
  }

  getExtension(srcData:string){
    var parts=srcData.split(",");
    let extension=parts[0].split(";")[0].split("/")[1]; 
    return extension;
}

  deleteImage(image:Image){
    const index=this.adventure.images.indexOf(image);
    this.adventure.images.splice(index,1);
  }

  getUtility( serviceName: string){
    for (let utility of this.utilities){
        if (utility.name==serviceName){
          return utility;
        }
    }
    return null;
  }

  addService(){
    let serviceName="";
    let servicePrice=0;
    if (this.selectedService==""){
        if (this.newService=="" || this.price<0){
          alert("Enter service name or chose existing one");
          return;
        }
        serviceName=this.newService;
        servicePrice=this.price;
    }else{
      if (this.price<0){
        alert("Enter price of service");
        return;
      }
      servicePrice=this.price;
      serviceName=this.selectedService;
    }
    let existingUtility=this.getUtility(serviceName);
    let utility=new Utility();
    if (existingUtility==null){
      utility.name=serviceName;
      utility.price=servicePrice;
    }else{
      utility=existingUtility;
      utility.price=servicePrice;
    }
    
    this.newService='';
    this.price=0;
    this.adventure.additionalServices.push(utility);
  }

  removeService(service:Utility){
    const index=this.adventure.additionalServices.indexOf(service);
    this.adventure.additionalServices.splice(index,1);
  }

  addFishingEquipment(){
    if (this.equipment==''){
      alert('Enter equipment name');
      return;
    }
    this.adventure.fishingEquipment.push(this.equipment);
    this.equipment='';
  }

  removeFishingEquipment(equipment:string){
    const index=this.adventure.fishingEquipment.indexOf(equipment);
    this.adventure.fishingEquipment.splice(index,1);
  }

  addConductRule(){
    if (this.rule==''){
      alert('Enter conduct rule name');
      return;
    }
    this.adventure.rules.push(this.rule);
    this.rule='';
  }

  removeConductRule(rule:string){
    const index=this.adventure.rules.indexOf(rule);
    this.adventure.rules.splice(index,1);
  }

  validateForm(){
    if (this.adventure.name!="" && this.adventure.guestLimit<=0 && this.adventure.description!="" && this.adventure.city!="" && this.adventure.country!="" && this.adventure.price<=0 && this.adventure.street!=""){
      this.validForm=true;
    }else{
      this.validForm=false;
    }
  }

  
}


