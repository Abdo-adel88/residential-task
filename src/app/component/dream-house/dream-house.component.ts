import { Component } from '@angular/core';
import { HouseInfoService } from 'src/app/service/house-info.service';

@Component({
  selector: 'app-dream-house',
  templateUrl: './dream-house.component.html',
  styleUrls: ['./dream-house.component.css']
})
export class DreamHouseComponent {
  constructor(private houseInfoService: HouseInfoService) {}
  inputValue:any
  onInputChange(event: any) {
     this.inputValue = event.target.value;
    this.houseInfoService.changeHouseInfo(this.inputValue); 
  }
}
