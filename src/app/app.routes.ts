import { Routes } from '@angular/router';
import { LogowanieComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    { path: 'login', component: LogowanieComponent },
    { path: 'dashboard', component: DashboardComponent }
  ];