import { DataService } from '../../shared/services/api/data.service';
import { ApiService } from '../services/api.service';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import * as userAction from './action';
import { UsersStateModel, User } from './model';
import { catchError, map } from 'rxjs/operators';
import { asapScheduler, of } from 'rxjs';


@State<UsersStateModel>({
  name: 'usersState',
  defaults: {
    users: [],
    loaded: false,
    loading: false,
    selectedUserId: null
  }
})

export class UserState {
    constructor(private dataService: DataService) {      
    }

// selectors = read from state
 @Selector()
 static users(state: UsersStateModel) {
   return state.users;
 }
 @Selector()
 static loaded(state: UsersStateModel) {
   return state.loaded;
 }

 @Selector()
 static SelectedUser(state: UsersStateModel): User {
   return state.users.find(
     (user: User) => user.id === state.selectedUserId
   );
 }


 //actionHandlers = write to state
@Action(userAction.LoadUsers)
  loadUsers({ patchState, dispatch }: StateContext<UsersStateModel>) {
    patchState({ loading: true });
    return this.dataService
      .getUsers()
      .pipe(
        map((users: User[]) =>
          asapScheduler.schedule(() =>
            dispatch(new userAction.LoadUsersSuccess(users))
          )
        ),
        catchError(error =>
          of(
            asapScheduler.schedule(() =>
              dispatch(new userAction.LoadUsersFail(error))
            )
          )
        )
      );
  }

  @Action(userAction.LoadUsersSuccess)
  loadUserSuccess(
    { patchState }: StateContext<UsersStateModel>,
    { payload }: userAction.LoadUsersSuccess
  ) {
    patchState({ users: payload, loaded: true, loading: false });
  }

  @Action(userAction.LoadUsersFail)
  loadUsersFail(
    { dispatch }: StateContext<UsersStateModel>,
    { payload }: userAction.LoadUsersFail
  ) {
    dispatch({ loaded: false, loading: false });
  }

  // ---- selected User ----
  @Action(userAction.SelectUser)
  selectedUser(
    { patchState }: StateContext<UsersStateModel>,
    { payload }: userAction.SelectUser
  ) {
    patchState({ selectedUserId: payload });
  }
}