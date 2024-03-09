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
      label: "Categorie 1",
      items: [
        {
          label: "Categorie 1.1",
          items: [
            {
              label: "Item 1.1.1",
              routerLink: "/menu"
            },
            {
              label: "Item 1.1.2",
              routerLink: "/menu"
            }
          ]
        },
        {
          label: "Categorie 1.2",
          items: [
            {
              label: "Item 1.2.1",
              items: [
                {
                  label: "Item 1.2.1.1",
                  routerLink: "/menu"
                },
                {
                  label: "Item 1.2.1.2",
                  routerLink: "/menu"
                }
              ]
            },
            {
              label: "Item 1.2.2",
              routerLink: "/menu"
            }
          ]
        }
      ]
    },
    {
      label: "Categorie 2",
      items: [
        {
          label: "Categorie 2.1",
          items: [
            {
              label: "Item 2.1.1",
              routerLink: "/menu"
            },
            {
              label: "Item 2.1.2",
              items: [
                {
                  label: "Item 2.1.2.1",
                  routerLink: "/menu"
                },
                {
                  label: "Item 2.1.2.2",
                  routerLink: "/menu"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      label: "Categorie 3",
      items: [
        {
          label: "Categorie 3.1",
          items: [
            {
              label: "Item 3.1.1",
              routerLink: "/menu"
            },
            {
              label: "Item 3.1.2",
              routerLink: "/menu"
            }
          ]
        }
      ]
    },
    {
      label: "Categorie 4",
      items: [
        {
          label: "Categorie 4.1",
          items: [
            {
              label: "Item 4.1.1",
              routerLink: "/menu"
            },
            {
              label: "Item 4.1.2",
              routerLink: "/menu"
            }
          ]
        }
      ]
    }
  ]
}
