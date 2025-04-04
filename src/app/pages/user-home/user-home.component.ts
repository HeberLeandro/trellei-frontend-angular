import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { MenuItem } from 'primeng/api';
import { InputSwitchModule } from 'primeng/inputswitch';
import { HeaderBarComponent } from '../header-bar/header-bar.component';
import { FormsModule } from '@angular/forms';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [
    SidebarModule,
    InputSwitchModule,
    HeaderBarComponent,
    SideMenuComponent,
    FormsModule,
    ScrollPanelModule,
    DataViewModule,
    ButtonModule,
    TagModule,
    CommonModule,
    CardModule,
    DividerModule
  ],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.scss',
})
export class UserHomeComponent implements OnInit {
  items: Array<MenuItem> | undefined;
sortOrder: number|undefined;
sortField: string|undefined;

  ngOnInit(): void {
    this.items = [
      { label: 'All Boards', icon: 'pi pi-th-large' },
      { label: 'Favorites', icon: 'pi pi-star' },
      { label: 'Recentes', icon: 'pi pi-clock' },
    ];
  }


  products: any[] = [
       {
         id: 1,
         name: "Laptop Ultra",
         category: "Eletrônicos",
         price: 1299.99,
         inventoryStatus: "INSTOCK",
         rating: 4.5,
         image: "laptop-ultra.jpg"
       },
       {
        id: 1,
        name: "Laptop Ultra",
        category: "Eletrônicos",
        price: 1299.99,
        inventoryStatus: "INSTOCK",
        rating: 4.5,
        image: "laptop-ultra.jpg"
      },
      {
        id: 1,
        name: "Laptop Ultra",
        category: "Eletrônicos",
        price: 1299.99,
        inventoryStatus: "INSTOCK",
        rating: 4.5,
        image: "laptop-ultra.jpg"
      },
      {
        id: 1,
        name: "Laptop Ultra",
        category: "Eletrônicos",
        price: 1299.99,
        inventoryStatus: "INSTOCK",
        rating: 4.5,
        image: "laptop-ultra.jpg"
      },
      {
        id: 1,
        name: "Laptop Ultra",
        category: "Eletrônicos",
        price: 1299.99,
        inventoryStatus: "INSTOCK",
        rating: 4.5,
        image: "laptop-ultra.jpg"
      },
       {
        id: 2,
        name: "Laptop Ultra",
        category: "Eletrônicos",
        price: 1299.99,
        inventoryStatus: "INSTOCK",
        rating: 4.5,
        image: "laptop-ultra.jpg"
      }];

}
