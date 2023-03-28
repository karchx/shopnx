import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shopnx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'host';
  sidebarVisible!: boolean;
  items!: MenuItem[];

  constructor() {}

  ngOnInit(): void {
    this.items = this.items = [
      {
        label: 'Home',
        icon: 'pi pi-pw pi-home',
        routerLink: '/',
      },
      {
        label: 'Shop',
        icon: 'pi pi-pw pi-shopping-bag',
        routerLink: 'shop',
      },
      {
        label: 'Cart',
        icon: 'pi pi-pw pi-shopping-cart',
        routerLink: 'cart',
      },
      {
        label: 'About',
        icon: 'pi pi-pw pi-info-circle',
        routerLink: 'about',
      },
    ];
  }

  open(event: boolean) {
    this.sidebarVisible = event;
  }
}
