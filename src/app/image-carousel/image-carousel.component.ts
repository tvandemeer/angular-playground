import { Component, OnInit } from '@angular/core';
import { CarouselModule, CarouselResponsiveOptions } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { APODService } from '../services/apod.service';

@Component({
  selector: 'app-image-carousel',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule],
  templateUrl: './image-carousel.component.html',
  styleUrl: './image-carousel.component.css'
})
export class ImageCarouselComponent implements OnInit {

  images: any[] = [];
  responsiveOptions: CarouselResponsiveOptions[] = [
    {
      breakpoint: '640px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  constructor(private apodService: APODService) {}
  ngOnInit() {
    this.apodService.GetRandomPics()
      .subscribe(images => this.images = images);
  }

}
