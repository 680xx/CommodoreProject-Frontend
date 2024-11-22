import { Routes } from '@angular/router';
import { LayoutLandingComponent } from './components/layout-landing/layout-landing.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
  { path: '', component: LayoutLandingComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];
