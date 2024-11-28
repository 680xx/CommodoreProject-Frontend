import { Routes } from '@angular/router';
// import { LayoutLandingComponent } from './components/layout-landing/layout-landing.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {LandingComponent} from './components/landing/landing.component';
import {DefaultComponent} from './components/default/default.component';

export const routes: Routes = [
  { path: '', component: DefaultComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];
