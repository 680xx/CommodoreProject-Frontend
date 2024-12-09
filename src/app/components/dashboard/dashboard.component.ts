import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HideIfClaimsNotMetDirective } from '../../directives/hide-if-claims-not-met.directive';
import { claimReq } from '../../utils/claimReq-utils';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HideIfClaimsNotMetDirective],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private router: Router) {
  }

  onLogoutClick() {
    this.router.navigateByUrl('userRegistry');
  }

  protected readonly claimReq = claimReq;
}

