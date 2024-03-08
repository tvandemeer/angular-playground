import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MenubarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  items: MenuItem[] = [
    {
      label: 'Menu',
      items: [
        {
          label: 'Picture of the Day',
          routerLink: '/'
        },
        {
          label: 'Galleria',
          routerLink: '/random'
        },
        {
          label: 'Carousel',
          routerLink: '/carousel'
        }
      ]
    }
  ];
  
}
