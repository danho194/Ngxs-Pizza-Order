import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserResult } from '../store/model';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiService {

    private API_BASE_URL = 'https://reqres.in/api/';

    constructor(private http: HttpClient) {         
    } 
    getUsers(): Observable<User[]> {
        
    let t =  this.http.get<UserResult>(
        `${this.API_BASE_URL}users?page=2`
        ).pipe(map(result => result.data));
    return t;
    }
}
