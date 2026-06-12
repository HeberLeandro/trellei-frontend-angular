import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '', 
    loadComponent: () => import('./modules/landpage/pages/login/login.component').then(m => m.LoginComponent) 
  },
  { 
    path: 'signup', 
    loadComponent: () => import('./modules/landpage/pages/signup/signup.component').then(m => m.SignupComponent)
  },
  { 
    path: 'u/:username/boards', 
    loadComponent: () => import('./modules/boards/pages/user-boards/user-boards.component').then(m => m.UserBoardsComponent)
  },
  { 
    path: '**', 
    loadComponent: () => import('./modules/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)
  },
];
