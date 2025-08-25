import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-login-7',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login-7.html',
  styleUrls: ['./login-7.scss']
})
export class Login7 {
  isLogin = true;
  showLoginPassword = false;
  showSignupPassword = false;

  loginForm: FormGroup;
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private api: ApiService, private message: NzMessageService) {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, this.emailValidator]],
      password: ['', [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/)
      ]]
    });

 
    this.signupForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, this.emailValidator.bind(this)]],
       phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      password: ['', [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/)
      ]],
      
    });
  }

 
  switchTab(tab: 'login' | 'signup') {
    this.isLogin = (tab === 'login');
  }

  emailValidator(control: AbstractControl): ValidationErrors | null {
    const value: string = control.value;
    if (!value) return null;

    const regex = /^[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    if (!regex.test(value)) return { invalidCharacters: true };

    const firstChar = value.charAt(0);
    if (firstChar !== firstChar.toLowerCase()) return { firstLetterUppercase: true };

    return null;
  }


  toggleLoginPassword() {
    this.showLoginPassword = !this.showLoginPassword;
  }


  toggleSignupPassword() {
    this.showSignupPassword = !this.showSignupPassword;
  }

  
  onLogin(): void {
    if (!this.loginForm.valid) {
      this.loginForm.markAllAsTouched();
      this.message.warning(this.getFormErrors(this.loginForm).join('\n'));
      return;
    }

    this.api.login(this.loginForm.value).subscribe({
      next: (res: any) => {
        this.message.success(res.message || 'User Login Successfully!');
        this.loginForm.reset();
      },
      error: (err: any) => {
        let errorMessage = 'Login failed';
        if (err.status === 404) errorMessage = 'User not found';
        else if (err.status === 401) errorMessage = 'Password is incorrect';
        else if (err.status === 400) errorMessage = 'Email is incorrect';
        else if (err.error?.message) errorMessage = err.error.message;

        this.message.error(errorMessage);
      }
    });
  }


  onSignup(): void {
    if (!this.signupForm.valid) {
      this.signupForm.markAllAsTouched();
      this.message.warning(this.getFormErrors(this.signupForm).join('\n'));
      return;
    }

    this.api.signup(this.signupForm.value).subscribe({
      next: (res: any) => {
        this.message.success(res.message || 'User Registered Successfully!');
        this.signupForm.reset();
      },
      error: (err: any) => {
        let errorMessage = 'Signup failed';
        if (err.error?.message) errorMessage = err.error.message;
        this.message.error(errorMessage);
      }
    });
  }


  private getFormErrors(form: FormGroup): string[] {
  const errorMessages: string[] = [];


  const fullNameErrors = form.get('fullName')?.errors;
  if (fullNameErrors) {
    if (fullNameErrors['required']) errorMessages.push('Full Name is required');
  }
  const phoneErrors = form.get('phone')?.errors;
if (phoneErrors) {
  if (phoneErrors['required']) errorMessages.push('Mobile Number is required');
  if (phoneErrors['pattern']) errorMessages.push('Mobile Number must be 10 digits');
}

  
  const emailErrors = form.get('email')?.errors;
  if (emailErrors) {
    if (emailErrors['required']) errorMessages.push('Email is required');
    if (emailErrors['invalidCharacters']) errorMessages.push('Email contains invalid characters');
    if (emailErrors['firstLetterUppercase']) errorMessages.push('Email should not start with uppercase');
  }


  const passErrors = form.get('password')?.errors;
  if (passErrors) {
    if (passErrors['required']) errorMessages.push('Password is required');
    if (passErrors['pattern']) errorMessages.push('Password must include uppercase, lowercase, number, and special character');
  }

  return errorMessages;
}

}
