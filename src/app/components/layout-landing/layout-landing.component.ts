/*import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-landing',
  standalone: true,
  imports: [],
  templateUrl: './layout-landing.component.html',
  styleUrl: './layout-landing.component.css'
})
export class LandingComponent {}*/

import { Component } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { LandingComponent } from '../landing/landing.component';
import {LoginComponent} from '../login/login.component';
import {RegisterComponent} from '../register/register.component';

@Component({
  selector: 'app-layout-landing',
  standalone: true,
  imports: [
    LandingComponent,
    NgComponentOutlet
  ],
  templateUrl: './layout-landing.component.html',
  styleUrl: './layout-landing.component.css'
})
export class LayoutLandingComponent {
  currentComponent: any = LandingComponent;

  // Handle button clicks to change the displayed component
  onLoginClick() {
    this.currentComponent = LoginComponent;
  }

  onRegisterClick() {
    this.currentComponent = RegisterComponent;
  }
}

