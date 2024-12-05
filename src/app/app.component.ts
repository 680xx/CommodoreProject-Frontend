import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {TOKEN_KEY} from './constants';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CommodoreProject-Frontend';

  constructor(private router: Router) {}

onLogoutClick() {
  localStorage.removeItem(TOKEN_KEY);
  this.router.navigateByUrl('login');
}

onLoginClick() {
  this.router.navigate(['/login']);
}

onRegisterClick() {
  this.router.navigate(['/register'])
}

}
