import { Component, Input } from '@angular/core';
import { userTasks } from './task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) usertask!: userTasks;
}
