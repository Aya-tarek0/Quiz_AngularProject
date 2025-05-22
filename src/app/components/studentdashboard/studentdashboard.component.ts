import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-studentdashboard',
  imports: [RouterLink],
  templateUrl: './studentdashboard.component.html',
  styleUrl: './studentdashboard.component.css'
})
export class StudentdashboardComponent {
  constructor(private route : Router){}

   token = localStorage.getItem('userToken')!;
    userData: any = jwtDecode(this.token);
     userId = this.userData['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];

  toResults(){

    this.route.navigate(['/AllResultsForStudent' ,this.userId])
  }

}
