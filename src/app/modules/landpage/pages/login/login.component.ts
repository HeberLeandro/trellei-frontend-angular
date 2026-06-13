import { Component, inject } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ImageModule } from 'primeng/image';
import { HeaderBarComponent } from '../../../../shared-module/header-bar/header-bar.component';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from "primeng/menu";
import { CheckboxModule } from 'primeng/checkbox';
import { AuthService } from '../../../../core/services/auth.service';
import { LoginCredentials } from '../../../../core/models/login-credentials';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule,ImageModule, 
    HeaderBarComponent, ButtonModule, MenuModule, CheckboxModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  loginForm = new FormGroup({
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email]
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    }),
    rememberMe: new FormControl(false, {
       nonNullable: true
    })
  });
  
  onSubmit() : void {
    if (!this.loginForm.valid){
      return;
    }

    const credentials: LoginCredentials = this.loginForm.getRawValue();
    console.log('Login Form Values ', credentials)

    this.authService.login(credentials).subscribe({
      next: (resposta) => {
        console.log('Login com sucesso!', resposta);
        this.router.navigate(['u/heber/boards']);
      },

      error: (erro) => {
        console.error('Falha no login', erro);
      }
    });
  }
}


