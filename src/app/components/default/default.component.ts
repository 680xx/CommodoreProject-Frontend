import { Component } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { LandingComponent } from '../landing/landing.component';
import { LoginComponent } from '../login/login.component';
// import {ComponentStateService} from '../../services/component-state.service';
import {RegisterComponent} from '../register/register.component';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [NgComponentOutlet],
  templateUrl: './default.component.html',
  styleUrl: './default.component.css'
})

export class DefaultComponent {
  // constructor(private componentStateService: ComponentStateService) {}
  currentComponent: any = LandingComponent;

  onLoginClick() {
    this.currentComponent = LoginComponent;
    // this.componentStateService.setCurrentComponent(LoginComponent);
  }

  onRegisterClick() {
    this.currentComponent = RegisterComponent;
    // this.currentComponent = LayoutLandingComponent;
  }

}
