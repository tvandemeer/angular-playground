import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { ResourcesService } from '../services/resources.service';
import { Resource } from '../models/Resource';

@Component({
  selector: 'app-tiered-menu',
  standalone: true,
  imports: [TieredMenuModule],
  templateUrl: './tiered-menu.component.html',
  styleUrl: './tiered-menu.component.css'
})
export class TieredMenuComponent implements OnInit {

  constructor(private resourcesService: ResourcesService) {}
  
  resources: Resource[];

  ngOnInit(): void {
    this.resourcesService.GetResources()
      .subscribe(res => this.resources = res);
  }

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
