import {Component, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {TOKEN_KEY} from './constants';
import {UserService} from './services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit {
  title = 'CommodoreProject-Frontend';

  constructor(private router: Router, private userService: UserService) {}

  fullName: string = '';

  ngOnInit() {
    this.userService.getUserProfile().subscribe({
      next: (res: any) => this.fullName = res.fullName,
      error: (err: any) => console.log('error while retrieving user profile:\n', err)
    })
  }

onLogoutClick() {
  localStorage.removeItem(TOKEN_KEY);
  window.location.reload();
  this.router.navigateByUrl('login');
}

onLoginClick() {
  this.router.navigate(['/login']);
}

onRegisterClick() {
  this.router.navigate(['/register'])
}

}
