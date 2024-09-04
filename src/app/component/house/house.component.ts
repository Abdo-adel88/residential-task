import { Component } from '@angular/core';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent {
  selectedCard: string = '';


  selectCard(card: string) {
    this.selectedCard = card;
  }
}
