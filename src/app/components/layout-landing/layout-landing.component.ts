import {Component, OnInit} from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import {ComponentStateService} from '../../services/component-state.service';

@Component({
  selector: 'app-layout-landing',
  standalone: true,
  imports: [ NgComponentOutlet ],
  templateUrl: './layout-landing.component.html',
  styleUrl: './layout-landing.component.css'
})
export class LayoutLandingComponent implements OnInit {
  currentComponent2: any;

  constructor(private componentStateService: ComponentStateService) { }

  ngOnInit() {
    this.componentStateService.currentComponent$.subscribe(component => {
      this.currentComponent2 = component;
    });
}}

