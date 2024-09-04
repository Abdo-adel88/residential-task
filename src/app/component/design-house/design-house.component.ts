import { Component, OnInit } from '@angular/core';
import { HouseInfoService } from 'src/app/service/house-info.service';

@Component({
  selector: 'app-design-house',
  templateUrl: './design-house.component.html',
  styleUrls: ['./design-house.component.css']
})
export class DesignHouseComponent implements OnInit {

  selectedCard: string = '';  // Keep track of the selected card
  houseInfo: string = '';
  homeInfo: boolean = false;
  constructor(private houseInfoService: HouseInfoService) {}

  ngOnInit() {
    this.houseInfoService.currentHouseInfo.subscribe(info => this.houseInfo = info); 
  }

  doDelete(){
    if(this.homeInfo==false){
      this.homeInfo = true
    }
    else{
      this.homeInfo=false
    }
  }

 
}
