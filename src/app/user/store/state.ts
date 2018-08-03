import { DataService } from '../../shared/services/api/data.service';
import { ApiService } from '../services/api.service';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import * as userAction from './action';
import { UsersStateModel, User } from './model';
import { catchError, map, switchMap } from 'rxjs/operators';
import { asapScheduler, of, Observable } from 'rxjs';
import { UserService } from '../services';


@State<UsersStateModel>({
  name: 'usersState',
  defaults: {
    users: null,
    //loaded: false,
    loading: false,
    selectedUserId: null
  }
})

export class UserState {
    constructor(private dataService: DataService, private userService: UserService) {      
    }

// selectors = read from state
 @Selector()
 static users(state: UsersStateModel) {
   return state.users;
 }


//  @Selector()
//  static loaded(state: UsersStateModel) {
//    return state.loaded;
//  }

 @Selector()
 static loading(state: UsersStateModel) {
   return state.loading;
 }

 @Selector()
 static SelectedUser(state: UsersStateModel): User {
   return state.users.find(
     (user: User) => user.id === state.selectedUserId
   );
 }


 //actionHandlers = writes to state and calls dispatcher if needed to create new actions
@Action(userAction.LoadUsers)
  loadUsers({ getState, patchState }: StateContext<UsersStateModel>, { payload }: userAction.LoadUsers) {
    patchState({ loading: true });
    //todo: check if we can move state also
    const state = getState() as UsersStateModel;
     // check cache
     if (!(state.users && payload)) {
      return this.userService.loadUsers();
    }     
  }  

  @Action(userAction.LoadUsersSuccess)
  loadUserSuccess(
    { patchState }: StateContext<UsersStateModel>,
    { payload }: userAction.LoadUsersSuccess
  ) {
    patchState({ users: payload, loading: false });
  }

  @Action(userAction.LoadUsersFail)
  loadUsersFail(
    { dispatch }: StateContext<UsersStateModel>,
    { payload }: userAction.LoadUsersFail
  ) {
    dispatch({ loading: false });
  }

  // ---- selected User ----
  @Action(userAction.SelectUser)
  selectedUser(
    { getState, patchState }: StateContext<UsersStateModel>,
    { payload }: userAction.SelectUser
  ) {
    patchState({ selectedUserId: payload });
    const state = getState() as UsersStateModel;
    // if collection exists (when user navigates to selected user directly, collection is loaded first)
    if (!state.users) {
      this.userService.requestUsers();
    }
    }

  }
 