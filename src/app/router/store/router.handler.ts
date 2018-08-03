import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Actions, ofActionDispatched, State } from '@ngxs/store';
import { RouterNavigation, Navigate} from '@ngxs/router-plugin'

//------ router model -------
export interface RouterStateModel {
  path: any;
  query?: object;
  extras?: NavigationExtras;
}



// //---- router action ------
// export class Go {
//   static readonly type = '[Router] Go';
//   constructor(public readonly payload: RouterStateModel) {}
// }

// export class Back {
//   static readonly type = '[Router] Back';
// }

// export class Forward {
//   static readonly type = '[Router] Forward';
// }
// @State<RouterStateModel>({
//   name: 'routersState',
//   defaults: {
//     path: 'users',
//     query: null,
//     extras: null,  
//   }
// })
// @Injectable()
// export class RouterHandler {
//   constructor(
//     private action$: Actions,
//     private router: Router,
//     private location: Location
//   ) {
//     this.action$.pipe(ofActionDispatched(Go)).subscribe((action: Go) => {
//       const { path, query: queryParams, extras } = action.payload;
//       this.router.navigate(path, { queryParams, ...extras });
//     });

//     this.action$
//       .pipe(ofActionDispatched(Forward))
//       .subscribe(() => this.location.forward());
//     this.action$
//       .pipe(ofActionDispatched(Back))
//       .subscribe(() => this.location.back());
//   }
// }

@Injectable()
export class RouteHandler {
  constructor(private router: Router, private actions$: Actions) {
    this.actions$
      .pipe(ofActionDispatched(Navigate))
      .subscribe(({ payload }) => 
    {
      let t = payload;
      t;
      let s = router.routerState;
      s;
    });    
    this.actions$
    .pipe(ofActionDispatched(RouterNavigation))
    .subscribe(({ payload }) => 
  {
    let t = payload;
    t;
  }); 
  }
}
