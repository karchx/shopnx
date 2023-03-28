import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'shopnx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() open: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  openSidebar() {
    this.open.emit(true);
  }
}
