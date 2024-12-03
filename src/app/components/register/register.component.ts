import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidatorFn, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {FirstKeyPipe} from '../../pipes/first-key.pipe';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FirstKeyPipe],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  constructor(public formBuilder: FormBuilder) { }
  registerForm!: FormGroup;
  isSubmitted:boolean = false;

  passwordMatchValidator: ValidatorFn = (control:AbstractControl):null => {
    const password = control.get('password')
    const confirmPassword = control.get('confirmPassword')

    if(password && confirmPassword && password.value != confirmPassword.value)
      confirmPassword?.setErrors({passwordMismatch:true})
    else
      confirmPassword?.setErrors(null)

    return null;
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/(?=.*[^a-zA-Z0-9 ])/)]],
      confirmPassword: [''],
    }, {validators: this.passwordMatchValidator})
  }

  onSubmit() {
    this.isSubmitted = true;
    console.log(this.registerForm.value)
  }

  hasDisplayableError(controlName: string):Boolean {
    const control = this.registerForm.get(controlName);
    return Boolean(control?.invalid) &&
      (this.isSubmitted || Boolean(control?.touched))
  }

}






