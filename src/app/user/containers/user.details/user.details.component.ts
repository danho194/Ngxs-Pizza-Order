import { Select, Store } from '@ngxs/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import { User, UsersStateModel } from '../../store/model';
import { UserState } from '../../store';

@Component({
  selector: 'app-user.details',
  templateUrl: './user.details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./user.details.component.scss']
})
export class UserDetailsComponent implements OnInit {
 

  user$: Observable<User>;

   @Select((s: any) => {
      return s.usersState.loading}
     ) loading$: Observable<boolean>;

  constructor(private store: Store) { 
      
  }

  ngOnInit() {
      this.user$ = this.store.select(UserState.SelectedUser);
  }

}
