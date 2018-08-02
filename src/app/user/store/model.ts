export interface UserResult {
  page:number,
  per_page:number,
  total:number,
  total_pages:number,
  data: User[],
}

export interface User {
    id: number,
    first_name: string,
    last_name: string,
    avatar: string,
  }

export interface UsersStateModel {
    users: User[];
    loaded: boolean;
    loading: boolean;
    selectedUserId: number;
  }