import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { LandingComponent} from './app/components/landing/landing.component';
import { routes } from './app/app.routes';

bootstrapApplication(LandingComponent, {
  providers: [
    provideRouter(routes) // Lägg till routes här om det behövs
  ],
}).catch((err) => console.error(err));
