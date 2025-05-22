import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/AuthService';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm: FormGroup;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private authService: AuthService ,private router : Router ) {
   this.registerForm = this.fb.group({
  userName: ['', Validators.required],
  email: ['', [Validators.required, Validators.email]],
  password: ['', [
    Validators.required,
    Validators.minLength(6),
    Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$')
  ]],
});

  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe({
        next: (res) => {
          this.successMessage ='Registered Succesfully';
          this.errorMessage = '';
          this.registerForm.reset();
          this.router.navigate(['/login']);
        },
        error: (err) => {
          this.errorMessage = err.error.message || 'Error';
          this.successMessage = '';
        }
      });

    }
    else
    {
      this.registerForm.setErrors({mismatch:true});
      this.registerForm.markAllAsTouched()
    }

  }

  get getname()
  {
    return this.registerForm.controls['userName'];
  }
    get getEmail()
  {
    return this.registerForm.controls['email'];
  }
    get getPassword()
  {
    return this.registerForm.controls['password'];
  }
}
