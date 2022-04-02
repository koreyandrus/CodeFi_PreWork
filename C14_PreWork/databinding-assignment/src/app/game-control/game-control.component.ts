import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalEvent = new EventEmitter<number>();
  interval;

  count = 0;

  ngOnInit(): void {
  }

  onStartGame(){
    this.interval = setInterval(() => {
      this.intervalEvent.emit(this.count + 1);
      this.count++;
    },1000);
  }

  onStopGame(){
    clearInterval(this.interval);
  }
}
