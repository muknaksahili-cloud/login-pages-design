import { Component } from '@angular/core';

@Component({
  selector: 'app-login-4',
  imports: [],
  templateUrl: './login-4.html',
  styleUrl: './login-4.scss'
})
export class Login4 {
   activeTab: 'login' | 'register' = 'login';

  switchTab(tab: 'login' | 'register') {
    this.activeTab = tab;
  }
}
