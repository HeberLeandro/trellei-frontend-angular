import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuModule } from 'primeng/menu';
import { DialogModule } from 'primeng/dialog';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { CommonModule } from '@angular/common';
import { FloatLabelModule } from 'primeng/floatlabel';

export const COMMON_IMPORTS = [
  HttpClientModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  ButtonModule,
  MenuModule,
  DialogModule,
  HeaderBarComponent,
  CommonModule,
  FloatLabelModule
];