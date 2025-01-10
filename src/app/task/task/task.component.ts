import { Component, EventEmitter, Input, Output } from '@angular/core';

import { type userTasks } from './task.model';
import { CardComponent } from "../../shared/card/card.component";

@Component({
  selector: 'app-task',
  imports: [CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) usertask!: userTasks;
  @Output() complete = new EventEmitter<string>();

  onComplete(){
    this.complete.emit(this.usertask.id);
  }
}
