import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { remoteRoutes } from './entry.routes';
import { HomeComponent } from './pages/home/home.component';

import { UiModule } from '@shopnx/ui';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, UiModule, RouterModule.forChild(remoteRoutes)],
  providers: [],
})
export class RemoteEntryModule {}
