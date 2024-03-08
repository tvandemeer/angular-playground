import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { APODService } from '../services/apod.service';
import { Picture } from '../models/Picture';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-picture-of-the-day',
  standalone: true,
  imports: [CardModule, TagModule, RatingModule, FormsModule],
  templateUrl: './picture-of-the-day.component.html',
  styleUrl: './picture-of-the-day.component.css'
})
export class PictureOfTheDayComponent implements OnInit {
  
  pic: Picture = new Picture();
  value: number = 0;

  constructor(private apodService: APODService) {}

  ngOnInit() {
    this.getPicture();
  }
  
  getPicture(): void {
    this.apodService.GetPicOfDay()
      .subscribe(res => (this.pic = res));
  }

}
