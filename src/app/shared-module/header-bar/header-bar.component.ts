import { Component, Inject, OnInit, Input } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DOCUMENT } from '@angular/common';
import { ThemeServiceService } from '../../core/services/theme-service.service';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header-bar',
  standalone: true,
  imports: [ImageModule, MenuModule, ButtonModule, NgIf],
  templateUrl: './header-bar.component.html',
  styleUrl: './header-bar.component.scss',
})
export class HeaderBarComponent implements OnInit {
  items: Array<MenuItem> | undefined;
  isLightTheme: boolean = false;
  @Input() showUserMenu: boolean = false;
  btnTheme: HTMLElement | null;
  themeService: ThemeServiceService;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private ThemeService: ThemeServiceService
  ) {
    this.btnTheme = document.getElementById('btn-theme');
    this.themeService = ThemeService;
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Options',
        items: [
          {
            label: 'Update',
            icon: 'pi pi-refresh',
          },
          {
            label: 'Delete',
            icon: 'pi pi-times',
          },
        ],
      },
    ];
  }

  changeTheme() {
    console.log();
    if (this.isLightTheme) {
      this.isLightTheme = false;
      this.btnTheme?.classList.replace('pi-moon', 'pi-sun');
      this.themeService.switchTheme('lara-dark-blue');
    } else {
      this.isLightTheme = true;
      this.btnTheme?.classList.replace('pi-sun', 'pi-moon');
      this.themeService.switchTheme('lara-light-blue');
    }
  }
}
