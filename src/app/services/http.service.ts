import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  private getHeaders() {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return headers;
  }

  get(url: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${url}`, {
      headers: this.getHeaders()
    });
  }

  post(url: string, data: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/${url}`, data, {
      headers: this.getHeaders()
    });
  }
}
