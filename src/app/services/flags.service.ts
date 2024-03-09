import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlagsService {

  constructor(private http: HttpClient) {}

  GetFlag(country_code: string): Observable<any> {
    return this.http.get<any>(`https://flagsapi.com/${country_code}/flat/64.png`);
  }
}
