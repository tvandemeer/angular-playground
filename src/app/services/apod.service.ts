import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Picture } from '../models/Picture';

@Injectable({
  providedIn: 'root'
})
export class APODService {

  constructor(private http: HttpClient) {}

  private API_KEY: string = 'ZchAz2jSV2OzKZYyff5QGtlWQcyrPtfeR3b9dWxI';

  private apiUrl: string = `https://api.nasa.gov/planetary/apod?api_key=${this.API_KEY}`;

  GetPicOfDay(): Observable<Picture> {
    return this.http.get<Picture>(this.apiUrl);
  }

  GetRandomPics(): Observable<Picture[]> {
    return this.http.get<Picture[]>(this.apiUrl + '&count=5');
  }
}
