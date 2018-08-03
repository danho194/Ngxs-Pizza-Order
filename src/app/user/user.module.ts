import { RouteHandler } from '../router/store/router.handler';
import { ApiService } from './services/api.service';

import { UserGuard } from './store/guard';
import { UsersComponent } from './containers/users/users.component';
import { UserDetailsComponent } from './containers/user.details/user.details.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { UsersState } from './store';
import { DataService } from '../shared/services';
//import { RouterModule as RModule} from '../router/router.module';
import { UserService } from './services/user.service';


const ROUTES: Route[] = [
  {
    path: '',
    //canActivate: [GetUsersGuard],
    component: UsersComponent,
   
  },

  {
    path: ':userId',
    canActivate: [UserGuard],
    component: UserDetailsComponent
  }
];
@NgModule({
  declarations: [
    UsersComponent,
    UserDetailsComponent,
    
  ],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(ROUTES),
    NgxsModule.forFeature(UsersState),
    HttpClientModule,
    ReactiveFormsModule, 
    // RModule,
    
  ],
  providers: [
    DataService,
    UserService,
    UserGuard,    
  ]
})
export class UserModule {}
