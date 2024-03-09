import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomUserService {

  constructor(private http: HttpClient) {}

  private apiUrl: string = "https://randomuser.me/api/";

  GetRandomUser(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

}
