import { CommonModule } from '@angular/common';
import { AuthService } from '../../core/services/AuthService';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Component({
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  LoginForm: FormGroup;
  successMessage = '';
  errorMessage = '';
  userData: any;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.LoginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$')
      ]],
    });

    if (localStorage.getItem('userToken')) {
      this.userData = jwtDecode(localStorage.getItem('userToken')!);
    }
  }

 onSubmit() {
  if (this.LoginForm.valid) {
    this.authService.login(this.LoginForm.value).subscribe({
      next: (res) => {
        this.successMessage = 'Login Succesfully';
        this.errorMessage = '';

        localStorage.setItem('userToken', res.token);
        this.userData = jwtDecode(res.token);
        console.log('Decoded User:', this.userData);

        const role = this.userData["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
        console.log('User Role:', role);

        if (role === 'Admin') {
          this.router.navigate(['/exams']);
        }
        else if (role === 'Student'){
          this.router.navigate(['/studentDashboard']);
        }
        else {
          this.router.navigate(['/home']);
        }
      },
      error: (err) => {
        this.errorMessage = err.error.message || 'Error';
        this.successMessage = '';
      }
    });
  } else {
    this.LoginForm.setErrors({ mismatch: true });
    this.LoginForm.markAllAsTouched();
  }
}

  get getname() {
    return this.LoginForm.controls['userName'];
  }

  get getPassword() {
    return this.LoginForm.controls['password'];
  }
}
