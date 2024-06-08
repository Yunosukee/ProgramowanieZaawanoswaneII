import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Programowanie_Zaawanosowane2';

  constructor (private router: Router){

  } 

  ngOnInit(){
    this.router.navigate(["/login"])
  }
}