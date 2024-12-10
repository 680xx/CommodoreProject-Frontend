import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HideIfClaimsNotMetDirective } from '../../directives/hide-if-claims-not-met.directive';
import { claimReq } from '../../utils/claimReq-utils';
import { NgIf } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HideIfClaimsNotMetDirective, NgIf, ReactiveFormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private router: Router) {
  }

  onPasswordClick() {
    this.router.navigateByUrl('userRegistry');
  }

  onUserRegistryClick() {
    this.router.navigateByUrl('userRegistry');
  }

  protected readonly claimReq = claimReq;
}

