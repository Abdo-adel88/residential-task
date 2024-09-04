import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HouseInfoService {
  private houseInfoSource = new BehaviorSubject<string>(this.getHouseInfoFromStorage()); 
  currentHouseInfo = this.houseInfoSource.asObservable();

  changeHouseInfo(info: string) {
    this.houseInfoSource.next(info);
    localStorage.setItem('houseInfo', info); 
  }

  private getHouseInfoFromStorage(): string {
    return localStorage.getItem('houseInfo') || ''; 
  }
}
