import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuModule } from 'primeng/menu';

export const COMMON_IMPORTS = [
  HttpClientModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  ButtonModule,
  MenuModule
];