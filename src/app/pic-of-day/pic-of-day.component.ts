import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiHttpService } from '../services/api-http.service';
import { Picture } from '../models/Picture';
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

  private apiService: ApiHttpService;

  constructor(private service: ApiHttpService) {
    this.apiService = service;
  }

  pic: Picture = new Picture();

  ngOnInit(): void {
    this.apiService.GetPicOfDay().subscribe((res) => {
      this.pic = res;
    })
  }
  
}
