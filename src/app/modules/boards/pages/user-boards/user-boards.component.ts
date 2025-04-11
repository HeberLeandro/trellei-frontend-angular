import { Component, OnInit } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { MenuItem } from 'primeng/api';
import { InputSwitchModule } from 'primeng/inputswitch';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { COMMON_IMPORTS } from '../../../../shared-module/shared-module.component';

@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [
    COMMON_IMPORTS,
    SidebarModule,
    InputSwitchModule,
    SideMenuComponent,
    ScrollPanelModule,
    DataViewModule,
    TagModule,
    CardModule,
    DividerModule,
  ],
  templateUrl: './user-boards.component.html',
  styleUrl: './user-boards.component.scss',
})
export class UserBoardsComponent implements OnInit {
  items: Array<MenuItem> | undefined;
  sortOrder: number | undefined;
  sortField: string | undefined;
  newBoardModalVisible: boolean = false;
  boardName: string = '';

  ngOnInit(): void {
    this.items = [
      { label: 'All Boards', icon: 'pi pi-th-large' },
      { label: 'Favorites', icon: 'pi pi-star' },
      { label: 'Recentes', icon: 'pi pi-clock' },
    ];
  }

  showDialog() {
    this.newBoardModalVisible = true;
  }

  products: any[] = [
    {
      id: 1,
      name: 'Laptop Ultra',
      category: 'Eletrônicos',
      price: 1299.99,
      inventoryStatus: 'INSTOCK',
      rating: 4.5,
      image: 'laptop-ultra.jpg',
    },
    {
      id: 1,
      name: 'Laptop Ultra',
      category: 'Eletrônicos',
      price: 1299.99,
      inventoryStatus: 'INSTOCK',
      rating: 4.5,
      image: 'laptop-ultra.jpg',
    },
    {
      id: 1,
      name: 'Laptop Ultra',
      category: 'Eletrônicos',
      price: 1299.99,
      inventoryStatus: 'INSTOCK',
      rating: 4.5,
      image: 'laptop-ultra.jpg',
    },
    {
      id: 1,
      name: 'Laptop Ultra',
      category: 'Eletrônicos',
      price: 1299.99,
      inventoryStatus: 'INSTOCK',
      rating: 4.5,
      image: 'laptop-ultra.jpg',
    },
    {
      id: 1,
      name: 'Laptop Ultra',
      category: 'Eletrônicos',
      price: 1299.99,
      inventoryStatus: 'INSTOCK',
      rating: 4.5,
      image: 'laptop-ultra.jpg',
    },
    {
      id: 2,
      name: 'Laptop Ultra',
      category: 'Eletrônicos',
      price: 1299.99,
      inventoryStatus: 'INSTOCK',
      rating: 4.5,
      image: 'laptop-ultra.jpg',
    },
  ];
}
