import { Routes } from '@angular/router';
import { UserBoardsComponent } from './modules/boards/pages/user-boards/user-boards.component';
import { PageNotFoundComponent } from './modules/page-not-found/page-not-found.component';
import { LoginComponent } from './modules/landpage/pages/login/login.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'u/:username/boards', component: UserBoardsComponent },
  { path: '**', component:  PageNotFoundComponent},
];
