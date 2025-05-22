import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/AuthService';

@Component({
  selector: 'app-nav-admin',
  imports: [RouterLink],
  templateUrl: './nav-admin.component.html',
  styleUrl: './nav-admin.component.css'
})
export class NavAdminComponent {

  constructor(private auth : AuthService)
    {

    }
    logout():void
    {
      this.auth.logout();

    }

}
