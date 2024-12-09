import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LandingComponent } from './components/landing/landing.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authGuard } from './security/auth.guard';
import { UserRegistryComponent } from './components/user-registry/user-registry.component';
import { ForbiddenComponent} from './components/forbidden/forbidden.component';
import { claimReq } from './utils/claimReq-utils';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
  { path: 'userRegistry', component: UserRegistryComponent, canActivate: [authGuard],
    data: { claimReq: claimReq.adminOrOwner }
  }
];
