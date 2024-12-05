import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidatorFn, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {FirstKeyPipe} from '../../pipes/first-key.pipe';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FirstKeyPipe],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  constructor(public formBuilder: FormBuilder, private service: AuthService, private router: Router) { }
  registerForm!: FormGroup;
  isSubmitted:boolean = false;
  showSuccessPopup:boolean = false;
  showFailEmailPopup:boolean = false;
  showFailDefaultPopup:boolean = false;

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
    if(this.service.isLoggedIn())
      this.router.navigateByUrl('/dashboard')

    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/(?=.*[^a-zA-Z0-9 ])/)]],
      confirmPassword: [''],
    }, {validators: this.passwordMatchValidator})
  }

  onSubmit() {
    this.isSubmitted = true;
    if (this.registerForm.valid) {
      this.service.createUser(this.registerForm.value)
        .subscribe({
        next: (res: any) => {
          if (res.succeeded) {
            this.registerForm.reset();
            this.isSubmitted = false;

            this.showSuccessPopup = true;
            setTimeout(() => {
              this.showSuccessPopup = false;
            }, 3000);

          }
        },
        error: err => {
          if(err.error.errors)
          err.error.errors.forEach((x:any) => {
            switch(x.code) {

              case "DuplicateUserName":
                break;

              case "DuplicateEmail":
                this.showFailEmailPopup = true;
                setTimeout(() => {
                  this.showFailEmailPopup = false;
                }, 3000);
                break;

              default:
                this.showFailDefaultPopup = true;
                setTimeout(() => {
                  this.showFailDefaultPopup = false;
                }, 3000);
                console.log(x);
                break;
            }
          })
          else
            console.log('error:',err);
        }
      });
    }
  }

  hasDisplayableError(controlName: string):Boolean {
    const control = this.registerForm.get(controlName);
    return Boolean(control?.invalid) &&
      (this.isSubmitted || Boolean(control?.touched) || Boolean(control?.dirty))
  }
}






