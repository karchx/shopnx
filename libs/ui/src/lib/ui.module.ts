import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponent } from './layout/common/common.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    
    ButtonModule
  ],
  declarations: [CommonComponent],
  exports: [CommonComponent]
})
export class UiModule {}
