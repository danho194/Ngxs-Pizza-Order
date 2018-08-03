import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { catchError, switchMap, take, map } from 'rxjs/operators';
import * as userAction from './action';
import { User } from './model';
import { UserService } from '../services';


// guards are not made for api calls - this is wrong
// 
// @Injectable()
// export class UsersGuard implements CanActivate {
//   usersLoaded$: Observable<boolean>;

//   constructor(private store: Store) {}
//   canActivate(): Observable<boolean> {
//     return this.checkStore().pipe(
//       switchMap(() => of(true)),  
//       catchError(() => of(false))
//     );
//   }

//   checkStore(): Observable<boolean> {
//     return this.store.select(s => s.usersState.loaded).pipe(
//       switchMap((loaded: boolean) => {
//         if (!loaded) {
//           // guard is invoking the action here:
//           return this.store.dispatch(new userAction.LoadUsers());
//         }
//         return of(true);
//       }),
//       take(1)
//     );
//   }
// }




@Injectable()
export class UserGuard implements CanActivate {
  constructor(private store: Store, private userService: UserService) {}
  canActivate(route: ActivatedRouteSnapshot) {   
        // route is source of truth - id from route is used to get item
        const id = parseInt(route.params.userId);
        
        if (!!id) {
          this.userService.selectUser(id);         
        }        
        return !!(id);    
  }
}


// @Injectable()
// export class UserExistsGuard implements CanActivate {

//   constructor(private store: Store) {}
//   canActivate(route: ActivatedRouteSnapshot) {
//     return this.checkStore().pipe(
//       switchMap(() => {
//         // route is source of truth - id from route is used to get item
//         const id = parseInt(route.params.userId);
//         return this.hasUser(id);
//       })
//     );
//   }

//   hasUser(id: number): Observable<boolean> {
//     return this.store.select(state => state.usersState.users).pipe(
//       map((users: User[]) => users.find(user => user.id === id)),
//       switchMap(user => {
//         if (!!user) {
//           // guard is invoking the action here:
//           return this.store
//             .dispatch(new userAction.SelectUser(user.id))
//             .pipe(switchMap(() => of(true)));
//         }
//         return of(false);
//       })
//     );
//   }

//   checkStore(): Observable<boolean> {
//     return this.store.select(state => state.usersState.loaded).pipe(
//       switchMap((loaded: boolean) => {
//         if (!loaded) {
//           return this.store.dispatch(new userAction.LoadUsers());
//         }
//         return of(true);
//       }),
//       take(1)
//     );
//   }
// }
