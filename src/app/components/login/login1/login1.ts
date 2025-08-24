import { Component } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../../../services/api.service';


@Component({
  selector: 'app-login1',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login1.html',
  styleUrls: ['./login1.scss']
})
export class Login1 {
  showPassword: boolean = false;
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private api: ApiService) {
    this.userForm = this.fb.group({
      email: ['', [
        Validators.required,
        this.emailValidator
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/)
      ]]
    });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  emailValidator(control: AbstractControl): ValidationErrors | null {
    const value: string = control.value;
    if (!value) return null;

    const regex = /^[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,}$/i;

    if (!regex.test(value)) {
      return { invalidCharacters: true };
    }
    return null;
  }

  onSubmit() {
    if (this.userForm.valid) {
      const loginData = this.userForm.value;

     
      this.api.login(loginData).subscribe({
        next: (res:any) => {
          console.log('Login Successful', res);
          alert('User Login Successfully!');
        },
        error: (err:any) => {
          console.error('Login failed', err);
          alert('Invalid Email or Password!');
        }
      });
    } else {
      this.userForm.markAllAsTouched();

      let errorMessages: string[] = [];
      const emailErrors = this.userForm.get('email')?.errors;
      if (emailErrors) {
        if (emailErrors['required']) {
          errorMessages.push("Email is required");
        }
        if (emailErrors['invalidCharacters']) {
          errorMessages.push("Email contains invalid characters");
        }
      }

      const passErrors = this.userForm.get('password')?.errors;
      if (passErrors) {
        if (passErrors['required']) {
          errorMessages.push("Password is required");
        }
        if (passErrors['pattern']) {
          errorMessages.push("Password must include uppercase, lowercase, number, and special character");
        }
      }

      if (errorMessages.length > 0) {
        alert(errorMessages.join("\n"));
      }
    }
  }
=======

@Component({
  selector: 'app-login1',
  imports: [],
  templateUrl: './login1.html',
  styleUrl: './login1.scss'
})
export class Login1 {
        
>>>>>>> 7567bff22a4bbff8005ae8392f9c09803878177e
}
