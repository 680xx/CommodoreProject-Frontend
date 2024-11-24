import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { NgComponentOutlet } from '@angular/common';
import { LandingComponent } from '../landing/landing.component';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [NgComponentOutlet],
  templateUrl: './default.component.html',
  styleUrl: './default.component.css'
})

export class DefaultComponent {
  currentComponent: any = LandingComponent;

  onLoginClick() {
    this.currentComponent = LoginComponent;
  }
}
