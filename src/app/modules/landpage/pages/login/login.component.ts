import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ImageModule } from 'primeng/image';
import { HeaderBarComponent } from '../../../../shared-module/header-bar/header-bar.component';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from "primeng/menu";
import { CheckboxModule } from 'primeng/checkbox';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule, ImageModule, HeaderBarComponent, ButtonModule, MenuModule, CheckboxModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  rememberMe = signal(false);
  
  login() : void {
    console.log('Login button clicked');
  }
}


