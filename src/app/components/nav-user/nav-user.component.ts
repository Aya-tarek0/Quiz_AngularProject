import { Component } from '@angular/core';
import { AuthService } from '../../core/services/AuthService';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-user',
  imports: [RouterLink],
  templateUrl: './nav-user.component.html',
  styleUrl: './nav-user.component.css'
})
export class NavUserComponent {
  constructor(private auth : AuthService)
  {

  }
  logout():void
  {
    this.auth.logout();

  }

}
