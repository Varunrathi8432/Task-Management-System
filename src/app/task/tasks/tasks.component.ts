import { Component, Input } from '@angular/core';
import { TaskComponent } from "../task/task.component";
import { NewTaskComponent } from "../new-task/new-task.component";

import { type newTask } from '../task/task.model';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    }
  ];

  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  isAddTask = false;

  get selectUserTasks(){
    return this.tasks.filter(task=>task.userId===this.userId);
  }

  onCompleteTask(id: string){
    this.tasks = this.tasks.filter(task=>task.id!==id);
  }

  onStartAddTask(){
    this.isAddTask=true;
  }

  onCancelAddTask(){
    this.isAddTask=false;
  }

  onAddTask(task: newTask){
    this.tasks.unshift({
      id:new Date().getTime().toString(),
      userId:this.userId,
      title:task.title,
      summary:task.summary,
      dueDate:task.date
    });
    this.isAddTask=false;
  }
}
