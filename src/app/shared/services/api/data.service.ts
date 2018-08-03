import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User, UserResult } from '../../../user/store/model';
// import { User, UserResult } from 
// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class DataService {
  private API_BASE_URL = 'https://reqres.in/api/';

  constructor(private http: HttpClient) { } 

   getUsers(): Observable<User[]> {
     return this.http.get<UserResult>(
     `${this.API_BASE_URL}users?page=2&delay=2`
    )  .pipe(map(result => result.data));
  }
}


