import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = 'http://localhost:3000/login';

  constructor(public httpClient: HttpClient) {}

  getLuhn(luhn: any): Observable<any> {
    return this.httpClient.get<any>(environment.END_POINTS.GET_LUHN, {params: {luhn}});
  }

  loginData(data: any) {
    console.log('data', data)
    return this.httpClient.post(this.url, data);
  }
}
