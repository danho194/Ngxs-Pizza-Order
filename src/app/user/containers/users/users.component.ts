import { Select, Store } from '@ngxs/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { RouteHandler } from '../../../router/store/router.handler';
import { Navigate } from '../../../../../node_modules/@ngxs/router-plugin';
//import { RouteHandler } from 'src/app/router/store/router.handler';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


  @Select((s: any) => {
     return s.usersState.users}
    )
  users$: Observable<any[]>;
  constructor(private store: Store, route: RouteHandler) {
    const t = store;
    
    t;
    const r = route;
    r;
    
  }

  ngOnInit() {}

  onClick() {
    this.store.dispatch(new Navigate(['/users']))
  }

}
