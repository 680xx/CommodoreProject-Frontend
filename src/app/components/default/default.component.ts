import { Component } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { LandingComponent } from '../landing/landing.component';
import { LayoutLandingComponent} from '../layout-landing/layout-landing.component';
import { LoginComponent } from '../login/login.component';
import {ComponentStateService} from '../../services/component-state.service';

@Component({
  selector: 'app-default',
  standalone: true,
  imports: [NgComponentOutlet],
  templateUrl: './default.component.html',
  styleUrl: './default.component.css'
})

export class DefaultComponent {
  constructor(private componentStateService: ComponentStateService) {}
  currentComponent: any = LandingComponent;

  onLoginClick() {
    this.currentComponent = LayoutLandingComponent;
    this.componentStateService.setCurrentComponent(LoginComponent);
  }

  onRegisterClick() {
    // this.currentComponent = LayoutLandingComponent;
  }

}
