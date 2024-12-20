import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { claimReq } from './utils/claimReq-utils';
import { HideIfClaimsNotMetDirective } from './directives/hide-if-claims-not-met.directive';
import { NgIf } from '@angular/common';
import {ImageToggleComponent} from './shared/image-toggle/image-toggle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HideIfClaimsNotMetDirective, NgIf, ImageToggleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit {
  title = 'CommodoreProject-Frontend';

  constructor(private router: Router, private userService: UserService, private authService: AuthService) {}

  isLoggedIn = false;
  fullName: string = '';


  ngOnInit() {
      this.isLoggedIn = this.authService.isLoggedIn();
      this.userService.getUserProfile().subscribe({
      next: (res: any) => this.fullName = res.fullName,
      error: (err: any) => console.log('error while retrieving user profile:\n', err)
    })
  }

  handleOnLogoutClick() {
  this.authService.deleteToken();
  this.router.navigateByUrl('login');
  window.location.reload();
}

  handleOnLoginClick() {
  this.router.navigate(['/login']);
}

  handleOnRegisterClick() {
  this.router.navigate(['/register'])
}

  protected readonly claimReq = claimReq;
}
