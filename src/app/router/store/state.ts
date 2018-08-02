// import { State, Action, StateContext, Store } from '@ngxs/store';
// import { Router, NavigationEnd, ActivationEnd, ActivatedRouteSnapshot, NavigationExtras } from '@angular/router';
// import { map, filter, mergeMap } from 'rxjs/operators';
// import { Injectable } from '@angular/core';
// import { RouterNavigation } from '../../../../node_modules/@ngxs/router-plugin';

// // export class Navigate {
// //   static readonly type = '[Router] Navigate';
// //   constructor(public payload: { path: any[], queryParams: object, extras: NavigationExtras }) {}
// // }

// export class Navigated {
//   static readonly type = '[Router] Navigated';
//   constructor(public payload: { params: any, queryParams: any, path: string }) {}
// }

// export class RouterStateModel {
//   params: any;
//   queryParams: any;
//   path: string;
// }

// // export interface RouterStateModel {
// //   path: any[];
// //   query?: object;
// //   extras?: NavigationExtras;
// // }

// @State<RouterStateModel>({
//   name: 'routersState',
//   defaults: {
//     params: null,
//     queryParams: null,
//     path: 'users',
//   }
// })
// @Injectable()
// export class RouterState {

//   private _activatedRoute: ActivatedRouteSnapshot;

//   constructor(private _router: Router, private _store: Store) {
//     this._router.events
//       .pipe(
//           filter(event => event instanceof ActivationEnd),
//           map((routerState: ActivationEnd) => {
//             let route = routerState.snapshot;
//             while (route.firstChild) {
//                 route = route.firstChild;
//             }
//             return route;
//           }),
//           filter(route => route.outlet === 'primary')
//       )
//       .subscribe((route) => this._activatedRoute = route);

//       this._router.events
//         .pipe(filter(event => event instanceof NavigationEnd))
//         .subscribe(() => {
//           const { params, queryParams, routeConfig: { path } } = this._activatedRoute;
//           this._store.dispatch(new Navigated({ params, queryParams, path }));
//         });
//   }

//   @Action(Navigated)
//   navigated({ setState }: StateContext<RouterStateModel>, { payload }: Navigated) {
//     setState(payload);
//   }

//   // @Action(Navigate)
//   // navigate({ setState }: StateContext<RouterStateModel>, { payload: { path, queryParams, extras } }: Navigate) {
//   //   this._router.navigate(path, { queryParams, ...extras });
//   // }

//   @Action(Navigate)
//   async changeRoute(context: StateContext<string>, action: Navigate) {
//     const path = action.payload;
//     // context.setState(path);
//     await this._router.navigate([path]);
//    // context.setState( path );
//   }
  

// }