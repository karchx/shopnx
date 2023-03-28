import { Component } from '@angular/core';

@Component({
  selector: 'common-layout',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss'],
})
export class CommonComponent {
  sidebarVisible!: boolean;
}
