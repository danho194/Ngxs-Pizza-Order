import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, of, asapScheduler, Subscription } from 'rxjs';
import { catchError, switchMap, take, map } from 'rxjs/operators';
import * as userAction from '../store/action';
import { User, UsersStateModel } from '../store/model';
import { DataService } from '../../shared/services';

// Class that dispathes new actions and gets data from api services and any other transfomations between 
// store, guards and containers
@Injectable()
export class UserService {
  

constructor(private store: Store, private dataService: DataService) {}

  requestUsers(): void {           
    this.store.dispatch(new userAction.LoadUsers(true));      
  }

  loadUsers(): Observable<Subscription> {   
    return this.dataService.getUsers()
        .pipe(map((users: User[]) => asapScheduler.schedule(() => 
          this.store.dispatch(new userAction.LoadUsersSuccess(users)))),
           catchError(error => of(asapScheduler.schedule(() => 
            this.store.dispatch(new userAction.LoadUsersFail(error))))));
  }  

  selectUser(id: number): void {
    this.store.dispatch(new userAction.SelectUser(id));
  }


// loadUser(): void {           
//     // cannot inject activatedRoutSnapshot here for some reason
//     // and cannot get queryParams from activatedRoute
//     // so doing it from guard instead but would prefer from here
//     // const id = parseInt(route.params.userId);
 
}


