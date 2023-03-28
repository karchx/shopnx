import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SidebarModule } from 'primeng/sidebar';

import { CommonComponent } from './layout/common/common.component';
import { HeaderComponent } from './navigations/header/header.component';
import { SidebarComponent } from './navigations/sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    MenubarModule,
    PanelMenuModule,
    SidebarModule,
  ],
  declarations: [CommonComponent, HeaderComponent, SidebarComponent],
  exports: [CommonComponent, HeaderComponent, SidebarComponent],
})
export class UiModule {}
