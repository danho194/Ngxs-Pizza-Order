import { User } from './model';

//maybe actions shouldn't be in the store

// load user actions
export class LoadUsers {
  static readonly type = '[UserList cmp] Load Users';
}
export class LoadUsersSuccess {
  static readonly type = '[UserList cmp] Load Users Success';
  constructor(public readonly payload: User[]) {}
}
export class LoadUsersFail {
  static readonly type = '[UserList cmp] Load User Fail';
  constructor(public readonly payload?: any) {}
}

// select user

export class SelectUser {
  static readonly type = '[UserList cmp] Select User';
  constructor(public readonly payload: number) {}
}

export type UserActions =
  | LoadUsers
  | LoadUsersSuccess
  | LoadUsersFail
  | SelectUser
 
