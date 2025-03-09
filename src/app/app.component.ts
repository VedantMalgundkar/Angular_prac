import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { UserComponent } from '../components/user/user.component';
import { DUMMY_USERS } from './dummy-user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;

  onSelectUser($event: any) {
    console.log($event);
  }
}
