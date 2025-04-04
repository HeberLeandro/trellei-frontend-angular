import { Routes } from '@angular/router';
import { UserHomeComponent } from './pages/user-home/user-home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'u/:username/boards', component: UserHomeComponent },
  { path: '**', component:  PageNotFoundComponent},
];
