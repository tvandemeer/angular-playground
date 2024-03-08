import { Component, OnInit } from '@angular/core';
import { GalleriaModule, GalleriaResponsiveOptions } from 'primeng/galleria';
import { APODService } from '../services/apod.service';

@Component({
  selector: 'app-random-pictures',
  standalone: true,
  imports: [GalleriaModule],
  templateUrl: './random-pictures.component.html',
  styleUrl: './random-pictures.component.css'
})
export class RandomPicturesComponent implements OnInit {
  
  images: any[] = [];
  responsiveOptions: GalleriaResponsiveOptions[] = [
    {
      breakpoint: '640px',
      numVisible: 1
    }
  ];

  constructor(private apodService: APODService) {}
  
  ngOnInit(): void {
    //this.getPictures();
    this.apodService.GetRandomPics()
      .subscribe(images => this.images = images);
  }

  getPictures(): void {
    this.apodService.GetRandomPics()
      .subscribe((res) => {
        console.log(res);      
        res.forEach( (item) => {
          this.images.push(item);
        })
    });
  }

}
