import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonComponent } from './layout/common/common.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CommonComponent],
  exports: [CommonComponent]
})
export class UiModule {}