import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./task/tasks/tasks.component";

import { DUMMY_USERS } from './dummy-users';
import { CardComponent } from "./shared/card/card.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TasksComponent, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectUser(){
    return this.users.find(user=>user.id===this.selectedUserId);
  }

  onSelect(id: string) {
    this.selectedUserId = id;
  }
}
