import { Component } from '@angular/core';
import {NgComponentOutlet} from '@angular/common';
import {LoginComponent} from '../login/login.component';
import {RegisterComponent} from '../register/register.component';


@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NgComponentOutlet],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  currentComponent: any = LandingComponent;

  // Handle button clicks to change the displayed component
  onLoginClick() {
    this.currentComponent = LoginComponent;
  }

  onRegisterClick() {
    this.currentComponent = RegisterComponent;
  }
}
