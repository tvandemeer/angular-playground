import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from '../services/api-http.service';
import { PicOfDay } from '../interfaces/pic-of-day.interface';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-pic-of-day',
  standalone: true,
  imports: [CardModule, TagModule],
  templateUrl: './pic-of-day.component.html',
  styleUrl: './pic-of-day.component.css'
})
export class PicOfDayComponent {

  constructor(private apiHttpService: ApiHttpService) {

  }

  pic: PicOfDay = {
    resource: undefined,
    concept_tags: undefined,
    title: undefined,
    date: undefined,
    url: undefined,
    hdurl: undefined,
    media_type: undefined,
    explanation: undefined,
    concepts: undefined,
    thumbnail_url: undefined,
    copyright: undefined,
    service_version: undefined
  };

  ngOnInit(): void {
    this.apiHttpService.GetPicOfDay().subscribe((res) => {
      this.pic = res;
    })
  }
  
}
