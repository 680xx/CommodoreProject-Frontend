import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentStateService {
  // BehaviorSubject to hold the state of currentComponent2
  private componentSubject = new BehaviorSubject<any>(null);

  // Observable to share the state
  currentComponent$ = this.componentSubject.asObservable();

  // Method to update the current component
  setCurrentComponent(component: any) {
    this.componentSubject.next(component);
  }
}
