import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImageModule } from 'primeng/image';
import { HeaderBarComponent } from '../../../../shared-module/header-bar/header-bar.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ImageModule, HeaderBarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  value = signal('Teste');
}


