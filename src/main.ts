import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { LayoutLandingComponent} from './app/components/layout-landing/layout-landing.component';
import { routes } from './app/app.routes';
import {DefaultComponent} from './app/components/default/default.component';

bootstrapApplication(DefaultComponent, {
  providers: [
    provideRouter(routes) // Lägg till routes här om det behövs
  ],
}).catch((err) => console.error(err));
