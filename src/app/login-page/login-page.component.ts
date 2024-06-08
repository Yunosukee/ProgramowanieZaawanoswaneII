import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logowanie',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LogowanieComponent {
  formData = {
    username: "",
    password: ""
  };
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  logowanie() {
    if (this.formData.username === 'admin' && this.formData.password === 'admin') {
      console.log('Zalogowano');
      this.errorMessage = '';
      this.authService.login();
      this.router.navigate(['/dashboard']);
    } else {
      this.authService.logout();
      console.log('Niepoprawne dane logowania');
      this.errorMessage = 'Niepoprawne dane logowania';
    }
  }
}