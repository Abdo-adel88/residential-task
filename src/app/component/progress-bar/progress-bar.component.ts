import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  progress: number = 0;
  isComplete: boolean = false;

  ngOnInit() {
    this.simulateProgress();
  }

  simulateProgress() {
    const interval = setInterval(() => {
      if (this.progress < 100) {
        this.progress += 10;
      } else {
        clearInterval(interval);
        this.isComplete = true;
      }
    }, 1000);
  }
}
