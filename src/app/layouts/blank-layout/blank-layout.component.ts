import { Component } from '@angular/core';
import { NavBlankComponent } from "../../components/nav-blank/nav-blank.component";
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-blank-layout',
  imports: [NavBlankComponent,RouterOutlet ],
  templateUrl: './blank-layout.component.html',
  styleUrl: './blank-layout.component.css'
})
export class BlankLayoutComponent {

}
