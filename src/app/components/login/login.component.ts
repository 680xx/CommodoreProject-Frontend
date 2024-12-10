import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted:boolean = false;
  showFailPopup:boolean = false;

  constructor(public formBuilder: FormBuilder, private service: AuthService, private router:Router) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    if(this.loginForm.valid)
    {
      this.service.signIn(this.loginForm.value).subscribe({
        next:(res:any) => {
          this.service.saveToken(res.token);
          window.location.reload();
          this.router.navigateByUrl('/dashboard')
        },
        error:err=>{
          if(err.status==400)
          {
            this.showFailPopup = true;
            setTimeout(() => {
              this.showFailPopup = false;
            }, 3000);
          }
          else
            console.log('error during login:\n', err);
        }
      })
    }
  }

  hasDisplayableError(controlName: string):Boolean {
    const control = this.loginForm.get(controlName);
    return Boolean(control?.invalid) &&
      (this.isSubmitted || Boolean(control?.touched) || Boolean(control?.dirty))
  }

  ngOnInit(): void {
    if(this.service.isLoggedIn())
      this.router.navigateByUrl('/dashboard')
  }
}
