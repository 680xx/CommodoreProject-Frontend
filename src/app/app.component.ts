import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { claimReq } from './utils/claimReq-utils';
import { HideIfClaimsNotMetDirective } from './directives/hide-if-claims-not-met.directive';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HideIfClaimsNotMetDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit {
  title = 'CommodoreProject-Frontend';

  constructor(private router: Router, private userService: UserService, private authService: AuthService) {}

  fullName: string = '';

  ngOnInit() {
    this.userService.getUserProfile().subscribe({
      next: (res: any) => this.fullName = res.fullName,
      error: (err: any) => console.log('error while retrieving user profile:\n', err)
    })
  }

onLogoutClick() {
  this.authService.deleteToken();
  this.router.navigateByUrl('login');
  window.location.reload();
}

onLoginClick() {
  this.router.navigate(['/login']);
}

onRegisterClick() {
  this.router.navigate(['/register'])
}

  protected readonly claimReq = claimReq;
}
