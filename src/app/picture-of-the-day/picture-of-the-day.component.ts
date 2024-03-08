import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { APODService } from '../services/apod.service';
import { Picture } from '../models/Picture';

@Component({
  selector: 'app-picture-of-the-day',
  standalone: true,
  imports: [CardModule, TagModule],
  templateUrl: './picture-of-the-day.component.html',
  styleUrl: './picture-of-the-day.component.css'
})
export class PictureOfTheDayComponent implements OnInit {
  
  pic: Picture = new Picture();

  constructor(private apodService: APODService) {}

  ngOnInit() {
    this.getPicture();
  }
  
  getPicture(): void {
    this.apodService.GetPicOfDay()
      .subscribe(res => (this.pic = res));
  }

}
