import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resource } from '../models/Resource';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  constructor(private http: HttpClient) {}

  private apiUrl: string = 'https://e5jm4.wiremockapi.cloud/resources';

  GetResources(): Observable<Resource[]> {
    return this.http.get<Resource[]>(this.apiUrl);
  }
  
}
