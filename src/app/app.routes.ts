import { Routes } from '@angular/router';
import { Login1 } from './components/login/login1/login1';
import { ForgotPassword } from './components/forgot-password/forgot-password';
import { SignUp } from './components/sign-up/sign-up';
import { Login2 } from './components/login/login-2/login-2';
import { Login3 } from './components/login/login-3/login-3';
import { Login4 } from './components/login/login-4/login-4';
import { Login5 } from './components/login/login-5/login-5';
import { Login6 } from './components/login/login-6/login-6';
import { Home } from './components/home/home';


export const routes: Routes = [
    {
        path: '',
        component:Home
    },
    {
        path: 'login1',
        component:Login1
    },
    {
        path: 'login2',
        component:Login2
    },
    {
        path: 'login3',
        component:Login3
    },
    {
        path: 'login4',
        component:Login4
    },
    {
        path: 'login5',
        component:Login5
    },
    {
        path: 'login6',
        component:Login6
    },
    {
        path: 'forgot-password',
        component: ForgotPassword
    }, 
    {
        path: 'sign-up',
        component: SignUp
    }
];
