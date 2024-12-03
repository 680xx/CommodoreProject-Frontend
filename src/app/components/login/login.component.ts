import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf, NgSwitch, NgSwitchCase} from '@angular/common';
import {FirstKeyPipe} from '../../pipes/first-key.pipe';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, FirstKeyPipe, NgSwitchCase, FirstKeyPipe, NgSwitch],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  isSubmitted:boolean = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/(?=.*[^a-zA-Z0-9 ])/)]],
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    console.log(this.loginForm.value)
  }

  hasDisplayableError(controlName: string):Boolean {
    const control = this.loginForm.get(controlName);
    return Boolean(control?.invalid) &&
      (this.isSubmitted || Boolean(control?.touched))
  }
}
