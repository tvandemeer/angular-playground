import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TieredMenuModule } from 'primeng/tieredmenu';

@Component({
  selector: 'app-tiered-menu',
  standalone: true,
  imports: [TieredMenuModule],
  templateUrl: './tiered-menu.component.html',
  styleUrl: './tiered-menu.component.css'
})
export class TieredMenuComponent {
  items: MenuItem[] = [
    {
      label: 'One',
      items: [
        {
          label: 'Sub One 1',
          routerLink: 'menu'
        },
        {
          label: 'Sub One 2',
          routerLink: 'menu'
        }
      ]
    },
    {
      label: 'Two'
    }
  ]
}
