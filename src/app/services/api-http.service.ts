import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Picture } from '../models/Picture';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {

  private http = inject(HttpClient);

  private API_KEY = 'ZchAz2jSV2OzKZYyff5QGtlWQcyrPtfeR3b9dWxI';

  private apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=';

  GetPicOfDay(): Observable<any> {
    return this.http.get<Picture>(this.apiUrl + this.API_KEY);
  }

  // GetRandomPics(): Observable<Picture[]> {
  //   // return n random pics
  // }
  
}