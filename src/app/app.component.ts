import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';

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
  localStorage.removeItem('token');
  this.router.navigateByUrl('');
}

onLoginClick() {
  this.router.navigate(['/login']);
}

onRegisterClick() {
  this.router.navigate(['/register'])
}

}
