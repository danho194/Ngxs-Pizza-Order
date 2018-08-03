import { Select, Store } from '@ngxs/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { RouteHandler } from '../../../router/store/router.handler';
import { Navigate } from '@ngxs/router-plugin';
import { User } from '../../store/model';
import { UserService } from '../../services';
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
    ) users$: Observable<User[]>;

    @Select((s: any) => {
      return s.usersState.loading}
     ) loading$: Observable<boolean>;

     l$: Observable<boolean>;
  constructor(private store: Store, userService: UserService) {
     userService.requestUsers();
  }

  ngOnInit() {}

  onClick() {
    this.store.dispatch(new Navigate(['/users']))
  }

}
