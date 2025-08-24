import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './sign-up.html',
  styleUrls: ['./sign-up.scss']
})
export class SignUp {
  signupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private message: NzMessageService
  ) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      const userData = this.signupForm.value;
      this.api.signup(userData).subscribe({
        next: (res) => {
          console.log('Signup Successful', res);
          this.message.success('User Registered Successfully!'); 
        },
        error: (err) => {
          console.error('Signup failed', err);
          this.message.error('Signup failed!');
        }
      });
    } else {
      this.message.warning('Please fill all fields correctly.'); 
    }
  }
}


