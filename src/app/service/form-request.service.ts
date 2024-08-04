import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIrestService {

  private endpoint = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }

  public getData(): Observable<any> {
    return this.http.get<any>(this.endpoint); 
  }

  // public postData(): Observable<any> {
  //   http.post<Config>('/api/config', newConfig).subscribe(config => {
  //     console.log('Updated config:', config);
  //   });
  // }
}
