import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidatorFn, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registerForm = FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
  })

  }
}

/*

import {Component} from '@angular/core';
import {AbstractControl, FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm;

  constructor(private fb: FormBuilder) {

    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],   // Validators.email = Email Structure
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/(?=.*[ˆa-zA-Z0-9 ])/)]],
      confirmPassword: [''],
    }, {Validators:this.passwordMatchValidator})

    passwordMatchValidator: ValidatorFn = (control: AbstractControl): null => {
    }

  }

  onSubmit() {
    console.log(this.registerForm.value)
  }
}
*/
