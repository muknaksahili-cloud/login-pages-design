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
<<<<<<< HEAD
import { Login7 } from './components/login/login-7/login-7';
=======
>>>>>>> 7567bff22a4bbff8005ae8392f9c09803878177e


export const routes: Routes = [
    {
        path: '',
        component:Home
    },
    {
        path: 'login',
<<<<<<< HEAD
        loadChildren:() => import('./components/login/login-module').then( m => m.LoginModule)
    },

=======
        loadChildren:() => import('./components/login/login-module').then(m => m.LoginModule)
    },
>>>>>>> 7567bff22a4bbff8005ae8392f9c09803878177e
    {
        path: 'forgot-password',
        component: ForgotPassword
    }, 
    {
        path: 'sign-up',
        component: SignUp
    }
];
