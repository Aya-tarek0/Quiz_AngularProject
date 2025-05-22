import { Component } from '@angular/core';
import { NavUserComponent } from "../../components/nav-user/nav-user.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-layoutt',
  imports: [NavUserComponent,RouterOutlet],
  templateUrl: './user-layoutt.component.html',
  styleUrl: './user-layoutt.component.css'
})
export class UserLayouttComponent {

}
