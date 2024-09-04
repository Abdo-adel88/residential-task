import { Component } from '@angular/core';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent {
  selectedCard: string = '';

  onSelectionChange(cardId: string) {
    this.selectedCard = cardId;
  }

  isStartButtonDisabled(): boolean {
    return this.selectedCard === '';
  }
}
